import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AgentsService} from '../../services/agents.service';

@Component({
  selector: 'app-agent-whatsapp',
  templateUrl: './agent-whatsapp.component.html',
  styleUrls: ['./agent-whatsapp.component.css']
})
export class AgentWhatsappComponent implements OnInit {
  show = {
    retweet: true,
    read: true,
  };
  value = 'Probability %';
  value2 = 'X value';
  value3 = 'Period';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private agentService: AgentsService){
  }
  editField: string;
  personList: Array<any> = [
    {id: 1, name: 'Undecided', participation: 0, maxUserLinks: 0, minUserLinks: 0, influence: 0},
    {id: 2, name: 'Captured', participation: 0, maxUserLinks: 0, minUserLinks: 0, influence: 0},
    {id: 3, name: 'Rejected', participation: 0, maxUserLinks: 0, minUserLinks: 0, influence: 0},
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
