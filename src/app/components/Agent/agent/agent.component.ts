import {Component, OnInit, Inject, Input, OnDestroy} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DataService} from '../../../services/data.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ABMdata} from '../../../../OpenWom/Essential/ABMdata';
import {Observable, Subject} from 'rxjs';
import {TwitterEnv} from '../../../../OpenWom/Environment/twitter/TwitterEnv';
import {TwitterSimulation} from '../../../../OpenWom/Environment/twitter/TwitterSimulation';

/*export Iagentes{
  hub: string;
  average: string;
  common: string;
}*/

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  editField: string;
  message: object;
  subscription: any;
  personList: Array<any> = [
    { id: 1, name: 'Hub', participation: 0, Followers: 0},
    { id: 2, name: 'OpinionLeader', participation: 0, Followers: 0},
    { id: 3, name: 'Common', participation: 0, Followers: 0},
  ];

  nextPersonList: Array<any> = [
    { id: 4, name: 'TwitterName', participation: 0, Followers: 0},
    { id: 5, name: 'TwitterName', participation: 0, Followers: 0},
    { id: 6, name: 'TwitterName', participation: 0, Followers: 0},

  ];
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
    console.log(this.personList[2]);
  }

  remove(id: any) {
    this.nextPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.nextPersonList.length > 0) {
      const person = this.nextPersonList[0];
      this.personList.push(person);
      this.nextPersonList.splice(0, 1);
    }
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  // @Input() environ: string;
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService){
      // this.subscription = this.dataService.message$
      // .subscribe(mymessage => this.message = mymessage);
       console.log(data);
      // this.env = data;
    }
  ngOnInit() {
    this.dataService.message$
      .subscribe(
        res =>  {
          function xinspect(o, i){
            if (typeof i === 'undefined') {i = ''; }
            if (i.length > 50) {return '[MAX ITERATIONS]'; }
            const r = [];
            for ( const p in o){
              const t = typeof o[p];
              r.push(i + '"' + p + '" (' + t + ') => ' + (t == 'object' ? 'object:' + xinspect(o[p], i + '  ') : o[p] + ''));
            }
            return r.join(i + '\n');
          }

          this.message = res;
            // paquete para inspeccionar object
          console.log('*****' + res);
          console.log(xinspect(res, ''));
          const env = new TwitterEnv();
          const newSimulation = new TwitterSimulation(env, 10, 5);
          const seed: ABMdata = new ABMdata(true, 1, 2, this.personList[2].participation, 4);
          const hub: ABMdata = new ABMdata(false, 150, 200, 0.1, 1);
          newSimulation.createNetwork(seed);
          newSimulation.printNetwork();
          console.log(seed.getUserParticipation());
          console.log(hub.getSeed());
        }
      );

  }

 /* ngOnDestroy() {
    this.subscription.unsubscribe();
  }
*/


  /*  ngOnInit(): void {
     this.dataService.environment$.subscribe(data => {
        this.env = data;
        console.log('environment: ', data);
     // console.log(this.environ);
    });
    }*/
}
