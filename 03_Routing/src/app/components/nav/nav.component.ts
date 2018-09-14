import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  routes: RouteEntry[] = [
    {
      caption: 'Unlocked',
      router: ['unlocked'],
    },
    {
      caption: 'Locked',
      router: ['locked']
    }
  ];
  constructor() { }

  ngOnInit() { }
}

interface RouteEntry {
  caption: string;
  router: any[] | string;
}
