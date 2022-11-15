import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

name: string="my company";
city= "elad";
isOsekMurshe: boolean= false;
openDate: Date=new Date(2000,10,19);
imageName="carlogo.png";
myType="number";
changeType(){
  this.myType=this.myType=="password"?"number":"password";
}
calcYear(){
  let d= new Date();
  return d.getFullYear()-this.openDate.getFullYear();
}
changeImg(){
  this.imageName=this.imageName=="carlogo.png"?"diamondpo.png":"carlogo.png"
}

  constructor() { }

  ngOnInit(): void {
  }

}
