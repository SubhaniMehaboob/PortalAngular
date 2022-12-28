import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  
  // constructor() { }
  constructor(private service: DataService, private commonData: CommonDataService,
    private router: Router, 
    ) { }


  ngOnInit(): void {
  }

  refreshPage() {
    window.location.reload();
}


}