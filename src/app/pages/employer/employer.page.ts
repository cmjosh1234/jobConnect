import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.page.html',
  styleUrls: ['./employer.page.scss'],
})
export class EmployerPage implements OnInit {

  constructor(private menu: MenuController ) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
