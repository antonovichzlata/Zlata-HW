const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWMyNmQxMTcwYjA4Y2JkYjIyOGRhMGE3NWJkMzZjNyIsIm5iZiI6MTc4MjU5NzgyMi4zNTgsInN1YiI6IjZhNDA0OGJlNTJkMjk1M2QwYThiMzg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.94mK959GV3GkLU0Z3BCj_hAeZBExwoBALpICrkNRhVI'
    }
};

const mainDOM = document.querySelector('.main');
const movieDetailsPageDOM = document.querySelector('.movie-details-page');
const movieDetailsDOM = document.querySelector('.movie-details');
const backButtonDOM = document.querySelector('.back-button');

const imagePrefix = 'https://image.tmdb.org/t/p/w500/'
const backdropPrefix = 'https://image.tmdb.org/t/p/w1280/';

let genres = [];

function getGenresById(id) {
    return genres.filter(genre => genre.id === id)[0]
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

function formatDate(date) {
    const formattedDate = new Date(date);
    return new Intl.DateTimeFormat('uk-UA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(formattedDate);
}

async function getGenres() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=uk-UA', options);
    const data = await response.json();
    genres = data.genres
}

async function getMovieDetails(movieId) {
    console.log(movieId);
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=uk-UA`, options);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const movie = await response.json();

        const movieGenres = movie.genres.map(genre => genre.name).join(' • ');

        movieDetailsDOM.innerHTML = `
            <div class="movie-details-backdrop" style="background-image: url('${backdropPrefix}${movie.backdrop_path}')"></div>
            <div class="movie-details-content">
                <div class="movie-details-poster">
                    <img src="${imagePrefix}${movie.poster_path}" alt="${movie.title}">
                </div>
                <div class="movie-details-info">
                    <h1 class="movie-details-title">${movie.title}</h1>
                    <p class="movie-details-original-title">${movie.original_title}</p>
                    <div class="movie-details-meta">
                        <span>Дата виходу: ${formatDate(movie.release_date)}</span>
                        <span>Оцінка: ${movie.vote_average.toFixed(1)}/10</span>
                        <span>Тривалість: ${movie.runtime} хв.</span>
                    </div>
                    <div class="movie-details-genres">${movieGenres}</div>
                    <p class="movie-details-overview">${movie.overview}</p>
                </div>
            </div>
        `;

        mainDOM.style.display = 'none';
        movieDetailsPageDOM.style.display = 'block';

    } catch (e) {
        console.error(e);
    }
}

function showMainPage() {
    movieDetailsPageDOM.style.display = 'none';
    mainDOM.style.display = 'grid';
}

async function getTopRatedMovies(page) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?language=uk-UA&page=${page}`, options
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        const movies = data.results;

        mainDOM.innerHTML = '';

        movies.forEach(movie => {

            const description = truncateText(movie.overview, 100);
            const movieGenres = movie.genre_ids.map(id => getGenresById(id).name).join(' • ');

            mainDOM.insertAdjacentHTML(
                'beforeend',
                `
                <div class="movie-item" onclick="getMovieDetails(${movie.id})">
                    <div class="movie-item-img-wrapper">
                        <img src="${imagePrefix}${movie.poster_path}" class="movie-item-img">
                    </div>
                    <div class="movie-item-info">
                        <h2 class="movie-item-info-title">${movie.title}</h2>
                        <p class="movie-item-description">${description}</p>
                        <div class="movie-item-genres">${movieGenres}</div>
                    </div>
                    <h2 class="movie-item-title">
                        ${movie.title}
                    </h2>
                </div>
                `
            );

        });

    } catch (e) {

        console.error(e);

    }

}

backButtonDOM.onclick = showMainPage;

async function loadPage() {
    await getGenres();
    await getTopRatedMovies(1);
}

loadPage();