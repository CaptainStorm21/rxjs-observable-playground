/**
 * Scheduler
 * - define an execution context for observables
 * - the most common use  is taking the outputs of an obserable that are mix of sync and asynch and making them all asynch so they are easier to deal with aso they work like a promise
 * - schedulers are not created by avail as properties for Rx.Scheduler
 * - not used often
 * 
 * What is a Scheduler? A scheduler controls when a subscription starts and when notifications are delivered. It consists of three components.

  -  A Scheduler is a data structure. It knows how to store and queue tasks based on priority or other criteria.
  -  A Scheduler is an execution context. It denotes where and when the task is executed (e.g. immediately, 
    or in another callback mechanism such as setTimeout or process.nextTick, or the animation frame).
  -  A Scheduler has a (virtual) clock. It provides a notion of "time" by a getter method now() on the scheduler. 
    Tasks being scheduled on a particular scheduler will adhere only to the time denoted by that clock.

 */

/** synch */

import { of, asyncScheduler } from "rxjs";  
import { observeOn } from "rxjs/operators";  
const observable = of(1, 2, 3);  
console.log("Before sync subscribe");  
observable.subscribe({  
  next(x) {  
    console.log(`Got sync value ${x}`);  
  },  
  error(err) {  
    console.error(`Something wrong occurred: ${err}`);  
  },  
  complete() {  
    console.log("This is done now.");  
  }  
});  
console.log("After sync subscribe");  

/** Asynch */
// import { of, asyncScheduler } from "rxjs";  
// import { observeOn } from "rxjs/operators";  
// const observable = of(1, 2, 3);  
// console.log("Before sync subscribe");  
// observable.subscribe({  
//   next(x) {  
//     console.log(`Got sync value ${x}`);  
//   },  
//   error(err) {  
//     console.error(`Something wrong occurred: ${err}`);  
//   },  
//   complete() {  
//     console.log("This is done now.");  
//   }  
// });  
// console.log("After sync subscribe");  

/**
Output

Before sync subscribe
Got sync value 1
Got sync value 2
Got sync value 3
This is done now.
After sync subscribe



 */
/**
 * The async Scheduler operates with a setTimeout or setInterval, even if the given delay was zero. 
 * As usual, in JavaScript, setTimeout(fn, 0) is known to run the function fn earliest on the next event loop 
 * iteration. This explains why got value 1 is delivered to the finalObserver after just after subscribe happened.
 * 
 * The schedule() method of a Scheduler takes a delay argument, which refers to a quantity of time relative 
 * to the Scheduler's own internal clock. A Scheduler's clock need not have any relation to the actual wall-clock time.
 * This is how temporal operators like delay operate not on actual time, but on time dictated by the Scheduler's clock.
 * This is specially useful in testing, where a virtual time Scheduler may be used to fake wall-clock time while 
 * in reality executing scheduled tasks synchronously.
 */