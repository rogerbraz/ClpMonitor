import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        RouterOutlet,
        RouterLink,
        SideMenuComponent
    ],
})

export class AppComponent {
    title = 'angular';
}
