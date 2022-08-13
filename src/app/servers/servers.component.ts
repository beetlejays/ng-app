import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template:  `
  <app-server></app-server>
  <app-server></app-server>` */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "no server created"
  
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true
    } , 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created"
    console.log("works")
  }

}
