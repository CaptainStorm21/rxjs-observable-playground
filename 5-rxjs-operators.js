/*
What is an operator
convenient tool for transforming data incoming from observables and for creating new observables

Two varieties
    - instance operation for transforming or aggregating data (map, pluck, sum)
    - static operators for making new observables (create, interval, fromArray)
*/

/*

    - create an observable which outputs a regular strem of numereric data
    - try various instance operators to see how the data is transformed
        note that instance operators never change the original observable


*/


var numObservable = new Rx.Observable(observer => {
    observer.next(90);
    observer.next(12);
    observer.next(23);
    observer.next(45);
    observer.next(21);
    observer.next(100);
});

numObservable.subscribe( e=> console.log(e, " is a number"));

/*
Console
"90  is a number"
"12  is a number"
"23  is a number"
"45  is a number"
"21  is a number"
"100  is a number"
*/

var scanned = numObservable
//scan creates a new stream without modifiying the original source
    .startWith(0)
    .scan((acc, v) => acc+v)

scanned.subscribe(e=>console.log(e, 'is a sum!'))

/* output

"0 is a sum!"
"90 is a sum!"
"102 is a sum!"
"125 is a sum!"
"170 is a sum!"
"191 is a sum!"
"291 is a sum!"

*/