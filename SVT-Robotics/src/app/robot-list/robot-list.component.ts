import { Component, OnInit } from '@angular/core';
import { Robot } from '../robot';
import { RobotService } from '../robot.service';


@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})
export class RobotListComponent implements OnInit{
  orderHeader: any ='';
  isDescOrder: boolean = true;
  robots: Robot[];
  filterText: string;
  
  constructor(private robotService: RobotService){}

  ngOnInit(): void {
    this.getRobots();
}
resetFilter(){
  this.filterText='';
  this.getRobots();
}
Filter(){
  if (this.filterText==''){
    this.getRobots();
  }
  else{
    this.robots = this.robots.filter(data=>{
      return this.getStringValue(data.robotId).toLowerCase().includes(this.filterText.toLowerCase())
    })
  }
}

getStringValue(value: any): string {
  return value.toString();
}

sort(headerName:any){
  this.isDescOrder = ! this.isDescOrder;
  this.orderHeader = headerName;
  
}

private getRobots(){
  this.robotService.getRobotsList().subscribe(data => {
    this.robots = data;

    this.robots.forEach( (element) => {
      element.robotId = parseInt(element.robotId);
      
  })
  })
}
}