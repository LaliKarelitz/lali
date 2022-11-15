import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {
  color:string="";
checkTime(){
  let t=new Date();
  if(t.getHours()>12&&t.getHours()<18)
     this.color="afternoon";
  else if(t.getHours()>4&&t.getHours()<12)
  this.color="morning";
  else this.color="evening";
}


}
