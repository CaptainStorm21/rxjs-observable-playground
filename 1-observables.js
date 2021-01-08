/*
1. create observable that pushes a list of user names to subscribers
2. create an observer that subscribes to observable
3. create an observable which represents clicking on a button
*/


/* create an observer 
observer is a function */

const listObserver = (e) => console.log(d, "!!!!");

/*
    listObserver("Tyrion")!
    output - Tyrion!!!

*/

let listObservable = new Rx.Observable (observer => {
    var names = ["Alice", "Edward", "David"];
    
    names.forEach ( name => observer.next(name))
})

listObservable.subscribe(listObserver)
/* observer takes a list and passes through an observerable 
*/

/* async */

let listObservable2 = new Rx.Observable (observer => {
    var names = ["Alice", "Edward", "David"];
    
    observer.next ("Robert");
    setTimeout (() => {
        names.forEach ( name => observer.next(name))
    }, 1000);
});
listObservable2.subscribe(listObserver)

/* output  = Robert will show up first */

/* clicking the UI button */
Rx.Observable.fromEvent(button, 'click')

/*call a function Rx.Observable.fromEvent(button, 'click') and then we subscribe  */
Rx.Observable.fromEvent(button, 'click').subscribe(observer);
/* the output will be logged the cooordinates where you clicked the mouse */

