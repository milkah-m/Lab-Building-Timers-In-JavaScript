/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
 // Initialize the remaining time
  // Set up a timer using setInterval
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  // Return the timer ID for validation

  //NOTES
   //- initiating a for loop to start a counter. is there i--
   // start time is decrementing by one for each interval and it needs to be logged. should i store it in a variable

    for(let i = startTime; i > 0; i-1 ){

  }
setInterval( () => {
  console.log(`Time remaining is ${time}`);
  
 }, interval

 )

//1. so basically: i am supposed to create a timer that gives a remindes at intervals and stops at 0. 
     //- setInterval()
     //- clearInterval()
     //- variable initiation
//2. STEPS:
  // Initialize the remaining time: TO HAVE A STARTING POINT AND A VARIABLE THAT I CAN USE
  // Set up a timer using setInterval
      //learn how setInterval works
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  // Return the timer ID for validation

  function countdownTimer(startTime, interval) {
  let timer = setInterval(() => {for (let i=startTime; i>(startTime-1); i--){
  console.log(`Time remaining is ${i}`);
   if(i===0)clearInterval(timer)}
}, interval)

return timer}

 
console.log(countdownTimer(10, 1000))

// //1. create a timer that logs the time at certain intervals and stops at 0 
//     //use console.log to log time
//     //use setInterval for the actual interval control. assign it to a variable for clearInterval to work
//     //use clearInterval  to end the timer
//     //set interval should: log the remaining time for each interval. how will it know the remaining time? i need to find a way to decrease the startTime for each interval. 
//     //could i potentially use a for loop inside the setInterval and let it countdown
//     //eg: startTime=10, interval =1
// //     //log (startTime - currentTime elapsed). if it has been 3 seconds, log time remaining is 7seconds. how do i do that?
//okay but i feel like doing the for loop is double work because the interval is already a counter but how do i get that count the way i have gotten i. how do i get the current count of the interval??
//how do i get that it is at 5 or at 4 and can i store that in a variable that i can use. initialization?
//okay... so it works but not quite... the for loop doesn't allow me to see the dealy. it seems to override the interval. so how do i do it without the for loop. i already got an idea from chat buttttt... i wanna implement it myself
//lemme run npm test and see if it passes
//okay!!! so basically using my for loop inside setInterval has my code run the whole loop, pause, and then keep going which is not what i want
//delay was incorporated with my new for loop but it came in with a myriad of problems
//what to do?
//yes i asked chat...
//so basically, the problem with using a for loop is that it runs the whole loop before the one second beating the purpose of my interval
// the best option is to define my initialization as a global variable outside my setInterval, my condition within clearInterval because otherwise setInterval is set to run forever, and my counter within the setInterval function
//when setting a constant equal to a function. set it equal to the whole function not the logic inside the function. that's the mistake i was making

//NOTES
   //- so for this one, i am incorporating setTimeout. seems semi-straightforward except for the promise part, but i will get to that
   //okay so how does promise work and how can i return it within a function that incorporates set timeout?
      //- how promise works
      //a promise does nothing visible until i handle it with .then() or .await. i must consume a promise by opening up its container and those are the two keys
   //3. my function broken down
        //3.1 when i call it, a promise object is created
        //3.2 i place a setTimeout object inside it and tell it to log a message after a delay
        //3.3 meanwhile and inwhile js keeps doing its thing because like time it waits for no man
        //3.4 after the delay. my message is logged and my promise is resolved. however without .the or.await to open up that container. she remains hidden and demure and i never see her face value
        //3.5 a promise is NOT a result. a promise is a CONTAINER. it stores something awaiting to happen and it can only be acccessed using .then

        /**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *  // Return a promise
  // Use setTimeout to log the message after the specified delay
  // Resolve the promise once the message is logged
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */

 //NOTES
   //1. set up set interval
        //- it is a higher-order function
        //paramtere 1. it takes what it should do within the intervals 
        //parameter 2. the delay time
        // my p.1 is log the message
   //2. set setInterval equal to a constant to return that value and input in stopRecurringTimer
   //3. question: how do i pass the timerId that i am returning in recurringTimer into stopRecurringTimer
   //4. question: if i call stopRecurringTimer recurring timer won't it stop it immediately and not even allow it to run because it is not an asynchronous function
   //how do i get the value of recurringTimer out of its function block and use it as the parameter for stopRecurringTimer
   //okay, so i've currently created the stopRecurringTimer but i don't know how to get its timerId for the parameter of stopRecurringTimer
   //when i try logging it, it shows up as undefined. i think this has a lot to do with stopRecurringTimer running synchronously and so it stops 
     //the function even before it starts and so it logs undefined.
   //to figure out how to get timerId and how the thing even works

   /**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */
// Set up a timer using setInterval to log the message
  // Return the timer ID
  //1. CREATING A RECURRING TIMER FUNCTION
      //it: takes in message and interval as parameters
      //it: i assigned the setInterval function to a variable for the sole purpose of returning the timerId that is produced
      // i return the timerId mainly because the instructions asked me to. not really because i understand why
      // so now how do i get it OUT! 
      //how do i get this value out of this function into the stopRecurringTimer function
      //i thought it would have to do with calling the recurringTimer function as a parameter but no... 
      //no. that gives me undefined
      //LORD, what am i missing here
      //but what will i be