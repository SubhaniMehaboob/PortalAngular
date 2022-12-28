import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { MachinesRoutingModule } from './machines-routing.module';
import { MachinesComponent } from './machines.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    MachinesRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule,
    RatingModule,
    NgbModule,
    
  
  ],
  declarations: [MachinesComponent,FilterPipe],
})
export class MachinesModule {


}
