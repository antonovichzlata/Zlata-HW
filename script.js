function bulka(burgerArr, callbackFn) {

    setTimeout(() => {
        console.log("булочка розігріта");
        burgerArr.push("булочка")
        callbackFn(burgerArr)
    }, 2000)
}

function kotleta(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("котлета посмажена");
        burgerArr.push("котлета")
        callbackFn(burgerArr)
    }, 2500)
}

function latuk(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("латук додано");
        burgerArr.push("латук")
        callbackFn(burgerArr)
    }, 1500)
}

function cheese(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("сир додано");
        burgerArr.push("сир")
        callbackFn(burgerArr)
    }, 1000)
}

function sous(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("соус додано");
        burgerArr.push("соус")
        callbackFn(burgerArr)
    }, 2500)
}

function zbirka(burgerArr, callbackFn) {

    setTimeout(() => {
        console.log("бургер зібраний " + burgerArr);
        callbackFn("бургер зібраний " + burgerArr);
    }, 1000)
}


new Promise((resolve) => {
    const burgerArr = []
    bulka(burgerArr, resolve);
   
})
   .then(burgerArr => {
        return new Promise(resolve => {
            kotleta(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            latuk(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            cheese(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            sous(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            zbirka(burgerArr, resolve);
        })
    })
    .then(result => {
        console.log("ГОТОВО");
    })