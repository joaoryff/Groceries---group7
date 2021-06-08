import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-home',
  templateUrl: './stores-home.component.html',
  styleUrls: ['./stores-home.component.css']
})
export class StoresHomeComponent implements OnInit {

  stores: any;

  constructor() { }

  ngOnInit(): void {
    let store1 = {name: 'Test1', openAt: 11, closeAt: 20, address: '1111 Test Street', phone: '123 113-412'};
    let store2 = {name: 'Test2', openAt: 15, closeAt: 22, address: '2222 Test Drive', phone: '222 123-432'};
    this.stores = [store1, store2];
  }

  storeIsOpen(openAt: number, closeAt:number): boolean{
    var date = new Date();
    return openAt <= date.getHours() && date.getHours() < closeAt;
  }

}
