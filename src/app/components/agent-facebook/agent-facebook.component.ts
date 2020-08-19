import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AgentsService} from '../../services/agents.service';

@Component({
  selector: 'app-agent-facebook',
  templateUrl: './agent-facebook.component.html',
  styleUrls: ['./agent-facebook.component.css']
})
export class AgentFacebookComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private agentService: AgentsService){
  }
  editField: string;
  personList: Array<any> = [
    {id: 1, name: 'Facebook User', participation: 0, maxUserLinks: 0, minUserLinks: 0, friends: 0, timeActivity: 0},
  ];
  nextPersonList: Array<any> = [
    {id: 2, name: 'Facebook User(2)', participation: 0, maxUserLinks: 0, minUserLinks: 0, friends: 0, timeActivity: 0},
  ];
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
    console.log('agent' + this.personList[0]);
    console.log(this.personList[1]);
    console.log(this.personList[2]);
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit(): void {
  }
  sendCreate(){
    this.agentService.sendArray(this.personList);
  }
}
