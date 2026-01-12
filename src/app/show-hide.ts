import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHide {

  constructor() { }
  @Input('appShowHide') hel : any;
  @Output() onmouseleave1 : EventEmitter<any> =new EventEmitter()
    @HostBinding('style.backgroundColor') bg = ""
    @HostListener('mouseenter', ['$event']) onmouseenter(event : any){
      this.bg = 'red'
      console.log(this.hel)
    }
    @HostListener('mouseleave', ['$event']) onmouseleave(event : any){
      this.bg = '';
      this.onmouseleave1.emit("dragleave")
    }

}
