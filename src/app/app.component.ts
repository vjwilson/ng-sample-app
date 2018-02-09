import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Cardinal Trails App';
  showLogOut = localStorage.getItem('loggedIn');

  constructor(
    private router: Router,
  ){}

  ngDoCheck() {
    this.showLogOut = localStorage.getItem('loggedIn');
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }
}
