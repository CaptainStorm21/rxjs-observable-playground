/*
subjects
1. like observables, but dont start automatically when subscribed to 
2. similar to a combination of observerable and observer 
3 can have multiple subscribers
4. can have multiple sources of data

analogy: a town squar ewhere the king's messenger (subject) is making 
series of proclamations to anyon ewho is around to hear the messenger (subscribers)
*/

/* differences between observable and subject

observable 
starts to execute as soon a sanything subscribes to it
impossible for mor ethan one function to listen to it
subscriing to it multiple times sets in motion multiple chains  of events
giving - spring into action to accomodate subscribers

subject
there is nothing to exectue
something else decides what data it will push and pass it to the subject by calling NEXT
selfish - not really concerned with its subscribers, it just does its own thing
*/

/* subject demo 

1. create a subject and add a subscriber
2. push data with next, note how subscriber can receive data
3. add multiple subscribers and verify that multiple observers can subscribe to a single subject

*/

var demoSubject = new Rx.Subject();

demoSubject.next,
// if you call next(), it will broadcast the info to anythign that subscribes to it

demoSubject.next("Friday")
// undefined because nothing that was surbscribes to it

//create a subscriber 
demoSubject.subscribe( name => console.log(`Long live ${name}!!!`));

//call an observable
demoSubject.next("Friday")

//create 2nd subscriber 
demoSubject.subscribe( name => console.log(`Good morning ${name} again!!!`));
demoSubject.next("Alexa")

/* output 
Long live, Alexa
Good morning, Alexa again!!
*/
