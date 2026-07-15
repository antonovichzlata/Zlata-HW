fetch("https://picsum.photos/v2/list")
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Bad status");
  })
  .then(images => {
    const gallery = document.querySelector(".gallery");
    images.forEach(image => {
        gallery.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card">
                <img src="${image.download_url}" alt="${image.author}">
                <p>${image.author}</p>
                <a href="${image.download_url}" target="_blank">
                    Завантажити
                </a>
            </div>
            `
        )
    });

  })
  .catch(err => {
    console.error(err)
  });
