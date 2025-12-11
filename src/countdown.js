function countdownTimer(startTime, interval){
  let clear = setInterval(() => {
    console.log(startTime)
    startTime--
    if (startTime < 0) {clearInterval(clear)
      console.log("Time Up!");
      
    }
    
  }, interval)

  return clear
}

// countdownTimer(10, 1000)

module.exports = { countdownTimer };




    //MY TRYOUTS//
// const id = setInterval(()=> console.log("Hello World"), 3000)
// console.log(id);



  // setTimeout(() => clearInterval(clear), 12000)

  //how to get time up at exactly 0
  //

  // function milkahCount(startingTime, interval){
  //     console.log(startingTime + ` seconds remaining`);
  //      const id = setInterval(() => {
  //       startingTime-=5
  //       console.log(startingTime + ` seconds remaining`)
  //       if(startingTime === 0){
  //        clearInterval(id)
  //        console.log("TIME UP!");
         
  //        }
  //       }, interval
  //      ) 
  // }

  // milkahCount(15, 5000)