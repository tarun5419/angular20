import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { combineLatestAll, concatMap, debounce, debounceTime, from, fromEvent, interval, map, Observable, of, range, scan, skip, take, takeLast, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-observable',
  imports: [],
  templateUrl: './rxjs-observable.html',
  styleUrl: './rxjs-observable.scss'
})
export class RxjsObservable implements OnInit{
  ngOnInit(): void {
//     const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(debounceTime(1000));
// result.subscribe(x => console.log(x));






// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   scan(i => ++i, 1),
//   debounce(i => interval(200 * i))
// );
// result.subscribe(x => console.log(x));








const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(() => interval(Math.random() * 2000).pipe(take(3))),
  take(2)
);
const result = higherOrder.pipe(combineLatestAll());

result.subscribe(x => console.log(x));







    // const observable = new Observable(subscriber=> {
    //   subscriber.next(1);
    //   // subscriber.next(2)
    //   // subscriber.next(3)
    //   // subscriber.next(4)
    //   // subscriber.next(5)
    //   // subscriber.next(6)
    //   // setTimeout(() => {
    //   //   subscriber.next(7);
    //   //   subscriber.complete();
    //   // }, 1000);
    //   let count  = 0
    //   const interval = setInterval(()=>{
    //     console.log(count++)
    //     if(count === 10) {
    //       subscriber.complete();
    //     clearInterval(interval);
    //     throwError(()=> "fcgvhb")
    //     }
    //   },1000)
    // })




    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x)
    //   },
    //   error: (err) => {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   }
    // })
    // console.log('just after subscribe');



const observable = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(throwError(() => new Error(`Invalid time `)))
    subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }
});


// const subscription = observable.subscribe((x) => console.log(x));
const subscription = observable.subscribe((x) => console.log(x), 
(err)=> console.log(err),
()=>console.log("complete"));





const observableUnsubscribe = from([10, 20, 30]);
const subscriptionUnsubscribe = observableUnsubscribe.subscribe((x) => console.log(x));
// Later:
subscriptionUnsubscribe.unsubscribe();

// this.takeFirstIntervalCount();
// this.takestInterval()
this.timer()

  }

  takeFirstIntervalCount(){
    const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));
  }

  takestInterval(){
    const many = range(1, 100);
    console.log(many,"many")
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe(x => console.log(x));


// Skip the values before the emission
const source = interval(500);
// skip the first 10 emitted values
const result = source.pipe(skip(10));

result.subscribe(value => console.log(value));
  }

  timer(){
    const source = of(1, 2, 3);

timer(3000)
  .pipe(concatMap(() => {
    return source
  }))
  // .subscribe(console.log);
  .subscribe((d)=>{
    console.log(d)
  });

  }



}
