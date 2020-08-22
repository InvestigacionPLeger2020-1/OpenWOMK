import {Component, OnInit, Inject, Input, OnDestroy} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DataService} from '../../../services/data.service';
import {AgentsService} from '../../../services/agents.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ABMdata} from '../../../../OpenWom/Essential/ABMdata';
import {Observable, Subject, Subscription} from 'rxjs';
import {TwitterEnv} from '../../../../OpenWom/Environment/twitter/TwitterEnv';
import {TwitterSimulation} from '../../../../OpenWom/Environment/twitter/TwitterSimulation';
import _ from 'lodash';
import {ExcelService} from '../../../services/excel.service';
import {VariationService} from '../../../services/variation.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})

export class AgentComponent implements OnInit {
  // @Input() environ: string;
  arrayAgent: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService, private excelService: ExcelService,private agentService: AgentsService, private variationService: VariationService) {
    // this.agentService.sendArray(this.arrayAgent);
    console.log(data);
    // this.env = data;
  }

  editField: string;
  subscription: any;
  participationHub: number;
  maxUserLinksHub: number;
  minUserLinksHub: number;
  seedParticipationHub: number;
  seedMaxUserLinksHub: number;
  seedMinUserLinksHub: number;
  participationOpinionLeader: number;
  maxUserLinksOpinionLeader: number;
  minUserLinksOpinionLeader: number;
  seedParticipationOpinionLeader: number;
  seedMaxUserLinksOpinionLeader: number;
  seedMinUserLinksOpinionLeader: number;
  participationCommon: number;
  maxUserLinksCommon: number;
  minUserLinksCommon: number;
  seedParticipationCommon: number;
  seedMaxUserLinksCommon: number;
  seedMinUserLinksCommon: number;
  participationAgent4: number;
  maxUserLinkAgent4: number;
  minUserLinkAgent4: number;
  dataFromCreate: any;
  simulations: number;
  hub: ABMdata;
  leader: ABMdata;
  common: ABMdata;
  hubSeed: ABMdata;
  leaderSeed: ABMdata;
  commonSeed: ABMdata;
  newSimulation: any;
  reportData: any[];
  probability: number;
  probabilityserv: number;
  createSubscription: Subscription;
  personList: Array<any> = [
    {id: 1, name: 'Hub', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 2, name: 'OpinionLeader', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 3, name: 'Common', participation: 0, maxUserLinks: 0, minUserLinks: 0},
  ];
  seedList: Array<any> = [
    {id: 1, name: 'Hub', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 2, name: 'OpinionLeader', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 3, name: 'Common', participation: 0, maxUserLinks: 0, minUserLinks: 0},
  ];

  nextPersonList: Array<any> = [
    {id: 4, name: 'TwitterAgent(4)', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 5, name: 'TwitterAgent(5)', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 6, name: 'TwitterAgent(6)', participation: 0, maxUserLinks: 0, minUserLinks: 0},

  ];
  nextSeedList: Array<any> = [
    {id: 4, name: 'TwitterName', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 5, name: 'TwitterName', participation: 0, maxUserLinks: 0, minUserLinks: 0},
    {id: 6, name: 'TwitterName', participation: 0, maxUserLinks: 0, minUserLinks: 0},

  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
    console.log('agent' + this.personList[0]);
    console.log(this.personList[1]);
    console.log(this.personList[2]);
  }

  updateSeed(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.seedList[id][property] = editField;
    console.log('seed' + this.seedList[0]);
    console.log(this.seedList[1]);
    console.log(this.seedList[2]);
  }

  remove(id: any) {
    this.nextPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  removeSeed(id: any) {
    this.nextSeedList.push(this.seedList[id]);
    this.seedList.splice(id, 1);
  }

  add() {
    if (this.nextPersonList.length > 0) {
      const person = this.nextPersonList[0];
      this.personList.push(person);
      this.nextPersonList.splice(0, 1);
    }
  }

  addSeed() {
    if (this.nextSeedList.length > 0) {
      const person = this.nextSeedList[0];
      this.seedList.push(person);
      this.nextSeedList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  changeSeedValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
    this.variationService.probability$
      .subscribe(
        res => {
          this.probabilityserv = res;
          console.log('serv: ' + this.probabilityserv);
        }
      );
    this.createSubscription = this.dataService.message$
      .subscribe(
        res => {
          _.forOwn(res, (value, key) => {
            console.log(key, value);
          });
          function xinspect(o, i) {
            if (typeof i === 'undefined') {
              i = '';
            }
            if (i.length > 50) {
              return '[MAX ITERATIONS]';
            }
            const r = [];
            for (const p in o) {
              const t = typeof o[p];
              // r.push(i + '"' + p + '" (' + t + ') => ' + (t === 'object' ? 'object:' + xinspect(o[p], i + '  ') : o[p] + ''));
              // p(0) = environment
              r.push(o[p]);
            }
            console.log('El environment:::' + r[0]);
            // return r.join(i + '\n');
            return r;
          }
          this.dataFromCreate = xinspect(res, '');

          this.participationHub = this.personList[0].participation;
          const hubParticipation = this.participationHub;
          this.maxUserLinksHub = this.personList[0].maxUserLinks;
          const hubMaxLink = this.maxUserLinksHub;
          this.minUserLinksHub = this.personList[0].minUserLinks;
          const hubMin = this.minUserLinksHub;
          this.seedParticipationHub = this.seedList[0].participation;
          this.seedMaxUserLinksHub = this.seedList[0].maxUserLinks;
          this.seedMinUserLinksHub = this.seedList[0].minUserLinks;
          this.participationOpinionLeader = this.personList[1].participation;
          this.maxUserLinksOpinionLeader = this.personList[1].maxUserLinks;
          this.minUserLinksOpinionLeader = this.personList[1].minUserLinks;
          this.seedParticipationOpinionLeader = this.seedList[1].participation;
          this.seedMaxUserLinksOpinionLeader = this.seedList[1].maxUserLinks;
          this.seedMinUserLinksOpinionLeader = this.seedList[1].minUserLinks;
          this.participationCommon = this.personList[2].participation;
          this.maxUserLinksCommon = this.personList[2].maxUserLinks;
          this.minUserLinksCommon = this.personList [2].minUserLinks;
          this.seedParticipationCommon = this.seedList[2].participation;
          this.seedMaxUserLinksCommon = this.seedList[2].maxUserLinks;
          this.seedMinUserLinksCommon = this.seedList[2].minUserLinks;
          // ----------------------------------------------------------
          try {​​  this.participationAgent4 = this.personList[3].participation; } catch (error) {​​  this.participationAgent4 = null;​​}
          console.log('trycatch: ' + this.participationAgent4);
          if (this.participationAgent4 !== null) {
            this.participationAgent4 = this.personList[3].participation;
            this.maxUserLinkAgent4 = this.personList[3].maxUserLinks;
            this.minUserLinkAgent4 = this.personList[3].minUserLinks;
            console.log('nextList participation: ' + this.personList[3].participation);
          }
          // this.simulations = this.dataFromCreate[3];
          // this.arrayAgent = this.personList;
          // this.agentService.sendArray(this.arrayAgent);
          console.log('Environment: ' + this.dataFromCreate[0] + '     **** twitter: 1, Facebook: 2, Whatsapp: 3');
          console.log('Periods: ' + this.dataFromCreate[1]);
          console.log('networkSize: ' + this.dataFromCreate[2]);
          console.log('simulations: ' + this.dataFromCreate[3]);
          console.log('datos Hub: ' + 'Participation: ' + this.participationHub + ' MaxUserLink: ' + this.maxUserLinksHub + ' MinUserLink: ' + this.minUserLinksHub);
          console.log('datos: Opinion ' + 'Participation: ' + this.participationOpinionLeader + ' MaxUserLink: ' + this.maxUserLinksOpinionLeader + ' MinUserLink: ' + this.minUserLinksOpinionLeader);
          console.log('datos: Common ' + 'Participation: ' + this.participationCommon + ' MaxUserLink: ' + this.maxUserLinksCommon + ' MinUserLink: ' + this.minUserLinksCommon);
          console.log('datos seed Hub: ' + 'Participation: ' + this.seedParticipationHub + ' MaxUserLink: ' + this.seedMaxUserLinksHub + ' MinUserLink: ' + this.seedMinUserLinksHub);
         /* const env = new TwitterEnv();
          this.newSimulation = new TwitterSimulation(env, this.dataFromCreate[1], this.dataFromCreate[2]);
          const seedy = false;
          console.log('antes del if' + hubParticipation);
          if (this.participationHub !== 0) {
            this.hub = new ABMdata(seedy, hubMin,
              hubMaxLink,
              hubParticipation, 1);
            console.log('participation' + hubParticipation);
            console.log('maxLink' + hubMaxLink);
            console.log('minLink' + hubMin);
            this.newSimulation.createNetwork(this.hub);
            console.log('--------');
            console.log('participation' + hubParticipation);
            console.log('maxLink' + hubMaxLink);
            console.log('minLink' + hubMin);
          }
          if (this.seedParticipationHub !== 0) {
            this.hubSeed = new ABMdata(true, this.seedList[0].minUserLinks,
              this.seedList[0].maxUserLinks,
              this.seedList[0].participation, 1);
            this.newSimulation.createNetwork(this.hubSeed);
          }
          if (this.participationOpinionLeader !== 0) {
            this.leader = new ABMdata(seedy, this.minUserLinksOpinionLeader,
              this.maxUserLinksOpinionLeader,
              this.participationOpinionLeader, 2);
            this.newSimulation.createNetwork(this.leader);
          }
          if (this.participationCommon !== 0) {
            this.common = new ABMdata(seedy, this.minUserLinksCommon,
              this.maxUserLinksCommon,
              this.participationCommon, 3);
            this.newSimulation.createNetwork(this.common);
          }

          if (this.seedParticipationOpinionLeader !== 0) {
            this.leaderSeed = new ABMdata(true, this.seedList[1].minUserLinks,
              this.seedList[1].maxUserLinks,
              this.seedList[1].participation, 2);
            this.newSimulation.createNetwork(this.leaderSeed);
          }
          if (this.seedParticipationCommon !== 0) {
            this.commonSeed = new ABMdata(true, this.seedList[2].minUserLinks,
              this.seedList[2].maxUserLinks,
              this.seedList[2].participation, 3);
            this.newSimulation.createNetwork(this.commonSeed);
          }
         // this.newSimulation.createFollowers();
         // this.newSimulation.printNetwork();
         // this.newSimulation.createFollowers();
          this.newSimulation.run(); ---*/
          // console.log(newSimulation.getHistory().getNetworkHistory());
        //  this.reportData = this.newSimulation.getHistory().getNetworkHistory();
         // this.agentService.sendArray(this.reportData); // Enviar datos a create
        //  console.log(this.newSimulation.getHistory().getNetworkHistory());
        //  this.excelService.generateExcel(this.reportData);
         // this.newSimulation.setProbabilityToSendMessage(1);

          //   console.log(this.seed.getUserParticipation());


          /*  newSimulation.createNetwork(seed);
            newSimulation.createNetwork(this.hub);
            newSimulation.createNetwork(this.leader);
            newSimulation.createNetwork(this.common);
            newSimulation.printNetwork();
            console.log(seed.getUserParticipation());
            console.log(hub.getSeed());*/
          const env = new TwitterEnv();
          console.log('periods: ' + this.dataFromCreate[1]);
          console.log('networkSize: ' + this.dataFromCreate[2]);
          const newSimulation = new TwitterSimulation(env, this.dataFromCreate[1], this.dataFromCreate[2]);
          const seed1: ABMdata = new ABMdata(true,  this.seedMinUserLinksHub,
                                                         this.seedMaxUserLinksHub,
                                                         this.seedParticipationHub, 1);
          const hub: ABMdata = new ABMdata(false, this.minUserLinksHub,
                                                       this.maxUserLinksHub,
                                                       this.participationHub, 1);
          const leader: ABMdata = new ABMdata(false, this.minUserLinksOpinionLeader,
                                                          this.maxUserLinksOpinionLeader,
                                                          this.participationOpinionLeader, 2);
          const common: ABMdata = new ABMdata(false, this.minUserLinksCommon,
                                                          this.maxUserLinksCommon,
                                                          this.participationCommon, 3);
          newSimulation.createNetwork(seed1);
          if (this.seedParticipationOpinionLeader !== 0) {
            const seed2: ABMdata = new ABMdata(true, this.seedMinUserLinksOpinionLeader,
                                                          this.seedMaxUserLinksOpinionLeader,
                                                          this.seedParticipationOpinionLeader, 2);
            newSimulation.createNetwork(seed2);
          }
          if (this.seedParticipationOpinionLeader !== 0) {
            const seed3: ABMdata = new ABMdata(true,  this.seedMinUserLinksCommon,
                                                           this.seedMaxUserLinksCommon,
                                                           this.seedParticipationCommon, 3);
            newSimulation.createNetwork(seed3);
          }
          if (this.participationAgent4 != null){
            const twitterAgent4 = new ABMdata(false, this.minUserLinkAgent4,
              this.maxUserLinkAgent4,
              this.participationAgent4, 4);
            newSimulation.createNetwork(twitterAgent4);
          }
          newSimulation.createNetwork(hub);
          newSimulation.createNetwork(leader);
          newSimulation.createNetwork(common);
          newSimulation.createFollowers();
          console.log('antes del if: ', this.probabilityserv);
          if (this.probabilityserv !== undefined) {
            newSimulation.setProbabilityToSendMessage(this.probabilityserv);
          }
          console.log('despues del if: ', this.probabilityserv);
          if (newSimulation.getProbabilityToSendMessage() === null){
            newSimulation.setProbabilityToSendMessage(0.5);
          }
          // newSimulation.printNetwork();
          console.log('antes del run ' + newSimulation.getProbabilityToSendMessage());
          console.log('-----------------------------');
          newSimulation.run();
          console.log('despues del run ' + newSimulation.getProbabilityToSendMessage());

          // newSimulation.getHistory().consoleLogNetwork();
          this.excelService.generateExcel(newSimulation.getHistory().getNetworkHistory());
         // console.log(newSimulation.getHistory().getNetworkHistory());
        }
      );
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
  /*ngOnDestroy(){
    console.log('Create Unsubscribe');
    this.createSubscription.unsubscribe();
  }*/
  sendCreate(){
    this.agentService.sendArray(this.personList);
  }
}
