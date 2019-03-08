import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthed = false;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.auth.isAuthed$.subscribe(authed => {
      this.isAuthed = authed;
      console.log('we are authed ?? ' + this.isAuthed);
    });
  }

  onClick() {
    console.log('logging out');

    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
