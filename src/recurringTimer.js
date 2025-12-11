
 function recurringTimer(message, interval) { 
  const timerId = setInterval(() => console.log(`${message}`), interval
  );
  
  return timerId
}

function stopRecurringTimer(timerId){
  clearInterval(timerId)
  }
     //TESTS//
//   const recur = recurringTimer("Hello world", 1000)
// stopRecurringTimer(recur)

// recurringTimer("Hello world", 1000)

module.exports = { recurringTimer, stopRecurringTimer };





                                            //MY TRYOUTS//

  // function milkahsRecurringTimer (message, delay){
  //   const timerId = setInterval (() => console.log(message), delay
  //   )
  //   return timerId
  // }

  // function milkahStopped (timerId){
  //   setTimeout(() => clearInterval(timerId), 11000)
  // }

  // const bedtime = milkahsRecurringTimer("Milkah is finally going to bed!", 2000)
  // milkahStopped(bedtime)