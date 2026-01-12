import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainstr',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './mainstr.html',
  styleUrl: './mainstr.scss'
})
export class Mainstr {
items = [
  { id: 1, name: 'Tarun' },
  { id: 2, name: 'Kumar' }
];
 users = [
    { id: 1, name: 'Tarun', role: 'admin' },
    { id: 2, name: 'Kumar', role: 'user' },
    { id: 3, name: 'John', role: 'guest' }
  ];
  showList = true;

}
