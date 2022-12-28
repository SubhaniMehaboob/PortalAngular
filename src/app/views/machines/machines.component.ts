import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/utils/src';
import { DataService } from '../../service/data.service';
import { CommonDataService } from '../../Common/common-data.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'machines.component.html',
  styleUrls: ['machines.component.css'],
})
export class MachinesComponent implements OnInit {


  collapsed = false;
  togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];
  max = 5;
  rate = 2;
  isReadonly = false;
  public filterQuery = '';
  menId : any;
  totalItems: number = 9;
  currentPage: number = 1;
  smallnumPages: number = 10;
  machineStatus: any;
  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;
  noofmachinesperpage = 6;
  checked: boolean;
  debugger;
  loremText =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';

  public machines: any = [];
  public itemNames: any = [];
  public levels: any = [];
  constructor(private service: DataService, private commonData: CommonDataService, 
    private router: Router) { }
    
  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  
  statusmachineId(event: any, machineId: string) {
    this.debugger;
    if(event == true){
     this.menId = 1
    }
    else{
      this.menId = 2
    }

    this.machineStatus = (
      {
        "cid": this.commonData.merchantId ,
        "crc": 0,
        "key": "",
        "men": this.menId ,
        "mid": machineId,

    })

    console.log("MachineStatus" +  JSON.stringify(this.machineStatus));
    this.service.saveMachineStatus(this.machineStatus).subscribe((resp: any) => {
      console.log("login Reponse:::" + JSON.stringify(resp));
      if(resp && resp.statusCode == 200) {
          console.log("Sucess")
          alert('SUCCESS!');
      }    
    });
  }

  
  onChange(event: any, machineId: string){
  

  }


  ngOnInit() {
  debugger;
    this.service.getMachines(this.commonData.merchantId,0,this.noofmachinesperpage).subscribe((resp: any) => {
      console.log("getMachines Reponse:::" + JSON.stringify(resp));
      this.debugger;
      if (resp && resp.statusCode == 200) {
        console.log("Machines...............................")
        this.machines = resp.rowMachines;
        this.itemNames = resp.itemNames;
        this.commonData.itemNames = resp.itemNames;
        this.levels = resp.levels;
        this.debugger;
        console.log("pagelenth" + resp.length)
        this.totalItems=(resp.noOfMachines / this.noofmachinesperpage) *  15;
        
      }
    });
  }

  isConfigEnabled(machineId: string, config: string): boolean {
    if(this.machines[0].machines.find(m => m.machineId == machineId)) {
      let configs :string [] = this.machines[0].machines.find(m => m.machineId == machineId).configs;
    return configs.indexOf(config) != -1;
    }
    else return false;
  }

  getLevel(id: any): string {
    let lvl = 'NA';
    if (this.levels) {
      let l = this.levels.find(l => l.id == id);
      if (l) lvl = l.level;
    }
    return lvl;
  }



  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.currentPage = event.page;
    let fromno=0;
    if(this.currentPage==1) {
      fromno=0;
    } else { 
      fromno=(this.currentPage*this.noofmachinesperpage)-this.noofmachinesperpage+1;

    }
    this.service.getMachines(this.commonData.merchantId,fromno,this.noofmachinesperpage).subscribe((resp: any) => {
      console.log("getMachines Reponse:::" + JSON.stringify(resp));
      if (resp && resp.statusCode == 200) {
        console.log("Machines...............................")
        this.machines = resp.rowMachines;
        this.itemNames = resp.itemNames;
        this.commonData.itemNames = resp.itemNames;
        this.levels = resp.levels;
        console.log('total items' + this.totalItems);
      }
    });
  }
  get currentIcon() {
    return this.collapsed ? this.togglerIcons[1] : this.togglerIcons[0];
  }

  navigateToNewMac() {

     this.router.navigate(['/machines/configuration'],{ queryParams:{} });

    //this.router.navigate(['businesstechnical'],{ queryParams:{} });

    
  }

  navigateToSpring(machineId: string) {
    this.router.navigate(['/machines/springs'],{ queryParams: {machineId} });
  }

  navigateToTransactions(machineId: string) {
    this.router.navigate(['/transactions'],{ queryParams: {machineId} });
  }

  navigateToConfiguration(machineId: string) {
     this.router.navigate(['/machines/configuration'],{ queryParams: {machineId} });
    //this.router.navigate(['businesstechnical'],{ queryParams: {machineId} });
  }

}
