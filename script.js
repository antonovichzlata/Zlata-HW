new Promise(resolve => {
  const arr = [];
  
  setTimeout(() => {
    const random = Math.floor(Math.random() * 5) + 1;
    arr.push(`1: ${random}`);
    resolve(arr)
  }, 3000)
})
  .then(arr => {
  return new Promise(resolve => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 5) + 6;
      arr.push(`2: ${random}`);
      resolve(arr)
    }, 2000)
  })
})
  .then(arr => {
  return new Promise(resolve => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 5) + 11;
      arr.push(`3: ${random}`);
      resolve(arr)
    }, 1000)
  })
})
  .then(arr => {
  return new Promise(resolve => {
    setTimeout(() => {
      const ol = document.createElement("ol")
      arr.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.append(li);
      });
      document.body.append(ol)
      
      resolve()
    }, 2000)
  })
})