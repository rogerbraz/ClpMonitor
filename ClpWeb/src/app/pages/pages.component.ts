import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    SideMenuComponent
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
