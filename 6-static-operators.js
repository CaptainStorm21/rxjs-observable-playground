/*
Static operators

- usualy found as a property of Rx.Observerable, ie create
- generally return a new, specialized obserable instance
- all convidnience tools (nothing you could implement yourself at expense of lots of time and effort)

*/

/* 

Demo
    - create observable using static operators
    -  each static operator produces an obserable with different properties
    - each invocation of a static operator return a new observable


*/

import { interval } from 'rxjs';


// var timer = new Rx.Observable.interval(1000)
// timer.subscribe(observer);

const timer2 = interval(1000);
const subscribe = timer2.subscribe(val => console.log("this is " + val))
