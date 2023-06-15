import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  names: string[] = ['Workspaces', 'Mobile Users', 'Settings', 'Admin Logs'];

  constructor() { }

  ngOnInit(): void {
  }

}
