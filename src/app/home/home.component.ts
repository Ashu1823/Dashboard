import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { ServerService } from '../server.service';
import {cloneDeep} from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public detail: any={
    company:"",
    contact:"",
    country:""
  };
  public modalRef:any =  BsModalRef;
  public details: any = [];
  public store_index = null;
  public nwdata: any 
  // public username: string;
  constructor(private modalService: BsModalService, public appservice:ServerService) { }
  
  ngOnInit(): void {
    this.appservice.getCompany().subscribe((info)=>{
      this.details=info.details;
      this.nwdata = this.details;
    });
    // this.details = dataJson.details;
    
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static',
    });
    if (this.store_index === null) {
      this.detail= {
        company:"",
        contact:"",
        country:""
      }
    }
    this.nwdata = JSON.parse(JSON.stringify(this.details));
  }
  add(){
    if (this.store_index !=null){
      this.nwdata[this.store_index]=this.detail;
      // console.log(this.store_index)
      this.store_index=null;
    }
    else{
    this.nwdata.push(this.detail);
  }
  this.close();
  
  }
  close() {
    this.details = this.nwdata;
    this.store_index = null;
    document.getElementById('closebtn')?.click();
  }
  edit(data:any,i:any){
    // console.log(data,i);
    this.detail=data;
    this.store_index=i;

  }
  delete(i:any){
    this.nwdata.splice(i,1);
    this.details = this.nwdata;
  }
}


