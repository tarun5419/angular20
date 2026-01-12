import { Component, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ShowHide } from '../show-hide';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink,ShowHide],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  @ViewChild('main') mainEl : any;

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)
  constructor(){}
  navigate(){
    this.router.navigate(['about',3], {queryParams : { name: 'Tarun', id: 3 }});
  }
  name= "tarun"

  onmouseleave(event: any){
    console.log(event)
  }

  changeElcolor(){
    this.mainEl.nativeElement.style.fontWeight = 600
    console.log(this.mainEl)
  }

  // @Output('onmouseleave') onmouseleave1 : EventEmitter<any> = new EventEmitter()
  
}
