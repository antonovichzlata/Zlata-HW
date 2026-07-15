function asyncGenerate(numOfOperation, numFrom, numTo, time) {
    return new Promise(res => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (numTo - numFrom + 1)) + numFrom;
            res(`${numOfOperation}: ${random}`);
        }, time);
    });
    
}

async function go() {
  const arr = [];

    arr.push(await asyncGenerate(1, 1, 5, 3000));
    arr.push(await asyncGenerate(2, 6, 10, 2000));
    arr.push(await asyncGenerate(3, 11, 15, 1000));

    await new Promise(resolve => {
        setTimeout(() => {
            const ol = document.createElement("ol");

            arr.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                ol.appendChild(li);
            });

            document.body.appendChild(ol);
            resolve();
        }, 2000);
    });
}

go();