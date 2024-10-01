
// Debounce

let counter = 0;
const getData = () => {
  // call API and get data;
  console.log("Fetching data ...", counter++ )
}


const debounce = function(fn, d) {
  let timer;
  return function() {
    let context = this;
    let args = arguments
    
    clearTimeout(timer);

    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d)
  }
}

const betterFunction = debounce(getData, 300)