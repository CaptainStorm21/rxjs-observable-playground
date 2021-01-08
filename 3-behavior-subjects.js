/*
Behavior Subject

All the features of the subject but it remembers the last thing that was pushed
when a new subscriber appears, they are automatically pushed the more recent thing 

combination of many RxJS feature in one convenient package

analogy the same messenger shouting in the town square but he staples the most recent
proclamations on the wall in the same spot

*/

/*
1. create a behavior subject and subscribe to it
2. push some data from the subject using next()
3. add more subscribers
    new subscribers are apprised of the latest thing that was sent
*/

var behaviorSubject2 = new Rx.behaviorSubject(42)
//undefined

var observer = n => console.log(` The meaning of life is ${n}`);

//now we subcribe to the subject
behaviorSubject2.subscribe(observer)
// the meaning of life is 42

behaviorSubject2.next(100)
// the meaning of life is 100

var observer2 = n => console.log(` Magic era is ${n}`);
behaviorSubject2.subscribe(observer2)
// magic era is 100
behaviorSubject2.next(999)
/** output 
 * magic era is 100 
 * magic era is 999
*/
