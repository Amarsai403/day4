import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  userStatus:string="Restore";
  showDiv:boolean=true;
  good:any={};
  fruits=["Apple","Pineapple","Orange","Mango"];
  arr=[{name:"raddish",type:"vegetable"},{name:"orange",type:"fruit"},{name:"carrot",type:"vegetable"},{name:"potato",type:"vegetable"},{name:"watermelon",type:"fruit"},{name:"mango",type:"fruit"},{name:"cabbage",type:"vegetable"}];
  
  insert(){
    this.arr.push({'name':this.good.name,'type':this.good.type});
    var temp=new Array();
    temp=JSON.parse(JSON.stringify(this.arr));
    //this.arr=temp;
    console.log(this.arr);
  }
  constructor() { }

  ngOnInit() {
  }

}
