import { Component, OnInit } from '@angular/core';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  constructor(private classToggler: ClassToggleService) {
    super();
  }
  dateTime:Date
  ngOnInit(): void {
    timer(0,1000).subscribe(() =>{
    this.dateTime=new Date()
  })

  }

  toggleTheme() {
    this.classToggler.toggle('.c-app', 'c-dark-theme');
  }
}
