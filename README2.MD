1. ON COUNTDOWN.JS
//INTRODUCTION: COUNTDOWN TIMER: this function logs the time at certain intervals and stops when it gets to zero.
            //- so obviously this means that it decrements which already tells me that i will have to implement a decrease
            // the nice flatiron people also gave me a hint to use setInterval which i have never used before but i have learned
            //they also told me to use clearInterval to clear it
            //so off i go

//1. define the countdownTimer function that takes the startTime and the interval as parameters
//2. assign the startTime to a variable in order to store it and use it in my setInterval logic
    //2.1 done away with the initial variable it was useless
//3. defining a setInterval function that:
// logs the time at the beginning,
//  decrements it,
//  clears it if it is less than 0
    //3.1 i assigned it to a variable because i need the timerId to pass into the clearInterval function for clearing
    //3.4 timerId is basically what identifies a particular setInterval or setTimeout function inside the js brain
//returning the startTime is completely useless too because that is a synchronous function. so it will return the start time at the very 
  //start of the function. it will not wait for it to be over.

  //LESSONS LEARNED
  //1. just like there is i++, there's also i--
  //2. setInterval: it takes function logic as its first parameter, and the interval time as its second. how it works is that it does the 
      //action within its logic every interval. for example for setInterval => (console.log("Hello World"), 5000). it logs hello world every 5 seconds
  //3. clearInterval is setInterval's party pooper. it takes the timerId of setInterval as its parameter and stops the interval.
      //this timerId thing did me dirty. but it basically what setInterval returns. access it by assigning it to a variable
      //also thsi lab taught me that i don't quite have variable assignemnt nailed. i need to read up a bit more on that. when to assign,
      //when not to, and what in the actual is the logic behind it. child, these are module 1 problems

2. ON REMINDER.JS
//INTRODUCTION: so this function basically logs a message after a delay. 
    // it incorporates a promise which apparently not only belong to God but to js too
    // it uses set timeout for the delay because this is different from an interval in the sense that it is not doing something every 2
       //seconds. rather it is doing something AFTER 2 seconds
       //it resolves the promise which i learn only by calling .then

//1. defined the delayed reminder function. it takes a string message as a first parameter and a delay time as a second parameter
//2. what value is the promise adding here? because this function will still do the delay and return the message after said delay. 
    //all it seems not to be doing is logging the message that the reminder is done but i'm sure that can be incorporated. so what is the point of the promise
    // actually i think i have hit the nail on the head. in order to return a message AFTER a delay. i need an asynchronous function. which is what promise here provides
    //i could also use async await. actually i can't do this because it does NOT work without a promise
    // so i am right in saying that the reason a promise is needed here is mainly for the resolution that tells us that the reminder is done
    //the promise resolve needs to be inside the timeout logic so that it can happen after the delay. AFTER for relevance. 
    // cause otherwise it will just run immediately and beat the purpose
    //in my case promise is allowed to take the one parameter of resolve because i will only be having a resolution and no rejection
    //IMPORTANT: i cannot, willl not, SHAN'T! see the resolution without using .then or await to open up my promise container and eat the worm
    // yes i know that was unnecessarily graphic but what i mean is that promise keeps its promises close and safe and to open them up, i need keys

3. ON RECURRINGTIMER.JS
//INTRODUCTION: there are two functions at play here
    //1. recurringTimer: logs a message at give intervals. 
    //2. stopRecurringTimer. stops the first function




                             //ABOUT recurringTIMER
//1. recurringTimer seems like a pretty straightforward option. it takes a message and an interval as parameters
//2. it implements setInterval with the logging logic and obviously the lovely second parameter which is always the interval
//3. it assigns the setInterval function to a variable so that we can return the timerId for use when we need to stop it
     //3.1 this part actually gave me such a hard time wuuuuuuehhh
     //3.2 i really struggled with how to implement this returned value into the other function and it did my head in trying to figure it out
     //3.3 i was issing a few key chracteristics about returning and the importance of variable assignment
//4. so basically. this one is fairly straightforward: use setInterval to define the logic and return setInterval's id for use in clearInterval

                                         //ABOUT stopRecurringTIMER
//1. don't let her two lines deceive. she devoured my two night brain cells
//2. this function stops the Timer initiated by recurringTimer
//3. it does this by taking the timerId which is returned by the recurringTimer function as a parameter
//4. its one liner logic is that it uses the clear interval function which takes in Id as a parameter by default
//5. this did a number on my brain as i trued to figure out when and how and with who that timerId was going to be but i was overcomplicating it
//6. all that is needed here is basically to dictate that this function should pass it in as a parameter to clearInterval


                                 //on variable assignemnt//
//1. aka the bane of my coding existence
//2. so all i needed to do was assign the already parametered function to a variable
//3. then pass in that variable as a parameter to stopRecurringTimer
//4. WHY THIS WORKS
     //- because recurringTimer returns the id
     //because recurringTimer by definition takes parameters. so i HAVE TO give it parameters for it to actually work
     //because the stopRecurringTimer function is stopping a specific function with a specific ID


