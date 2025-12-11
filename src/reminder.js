
function delayedReminder(message, delay) {
 return new Promise(resolve => {
  setTimeout(()=> {
    console.log (`${message}`);
    resolve("Reminder done")
  }, delay)
    })
 }


              //testing//
// const resolved = delayedReminder("Time to stretch!", 3000)
// .then(result => console.log(result))



module.exports = { delayedReminder }

                               //MY TRYOUTS//

//   function milkahsReminder (message, delay){
//     return new Promise (resolve => setTimeout(() => 
//       {console.log(`${message}`)
//       resolve("Well done, good and faithful nutcase!")
//       }, delay
//     ))
//   }

//   async function reveal (){
// const revelation = await  milkahsReminder("Take your BeReal NOW!", 5000)
// console.log(revelation);
// }

// //   milkahsReminder("Take your BeReal NOW!", 5000)

//   reveal()
  
  