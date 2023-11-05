import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }
  toggleAddTask() {
    this.uiService.togglAddTask();
  }

  hasRoute(route: String){
    return this.router.url === route;
  }
}
