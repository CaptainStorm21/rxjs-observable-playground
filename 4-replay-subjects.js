/**
 * replay subjects
 * 1. work like behavior subjects but where behaior subject rebroadcasts the most recent event, 
 * replay subjects rebroast several of the most recent events
 * 2. useful if new subscribers need to "catch up"
 * 3. useful if only last x events are interesting message board 
 * displaying new activity from newest to oldest
 * 
 * similar to the message board .. show last 10 messages before 
 * new one is added, forget the others above 10
 */

var rSubject = new Rx.ReplaySubject(3)
rSubject.subscribe (observer);
//no output

rSubject.subscribe ( name => console.log(`${name} is great`));
rSubject.next("Orion")
//output Orion is great
rSubject.next("Stephan")
rSubject.next("Emily")

rSubject.subscribe(name => console.log(`${name} is bad very bad`))
//logs all names indicated on line 13 (number locked)

rSubject.next("Dominic")
/* Dominic is great
Dominic is very bad
*/

