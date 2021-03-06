import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AgentsComponent} from '../forms/agents/agents.component';
import {AgentComponent} from '../agent/agent/agent.component';
import {VariationsComponent} from '../variations/variations/variations.component';
import { ABMdata} from '../../../OpenWom/Essential/ABMdata';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {DataService} from '../../services/data.service';
import { ExcelService} from '../../services/excel.service';
import {AgentsService} from '../../services/agents.service';
import {VariationService} from '../../services/variation.service';
import {AgentWhatsappComponent} from '../agent-whatsapp/agent-whatsapp.component';
import {VariationWhatsappComponent} from '../variation-whatsapp/variation-whatsapp.component';
import {AgentFacebookComponent} from '../agent-facebook/agent-facebook.component';
import {VariationFacebookComponent} from '../variation-facebook/variation-facebook.component';

interface Iabm{
  environment: string;
  seed: string;
  Environmen: any;
  periods: number;
  networkSize: number;
 /* userLinksMin: number;
  userLinksMax: number;
  userParticipation: number;
  userType: number;
  influenceMin: number;
  influenceMax: number;*/
}
form: FormGroup;
interface Ienv{
  value: string;
  viewValue: string;

}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


// let newSimulation;

export class CreateComponent implements OnInit {
   form: FormGroup;
   message: object;
   reportData: any[];
  dataFromAgent: any;
  environ: string;
   agentArray: any[];
   subscription: any;
   probabilityserv: number;
   // ---------------------------------
  hub: string;
  opinionLeader: string;
  comon: string;
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
  // ----------------------------------

  // ----
  hubc: ABMdata;
  leader: ABMdata;
  common: ABMdata;
  hubSeed: ABMdata;
  leaderSeed: ABMdata;
  commonSeed: ABMdata;
  newSimulation: any;
  environmentf: string;
  periodsf: number;
  networksizef: number;
  // ----
  variation;
  constructor(public rulesDialog: MatDialog, private messageService: DataService, private excelService: ExcelService, private agentService: AgentsService, private variationService: VariationService) {
    this.buildForm();
    this.messageService.sendMessage(this.message);
  //  const env = new TwitterEnv();
  //  newSimulation = new TwitterSimulation( env, 0, 0);
  }
  envs: Ienv[] = [
    {value: 'Twitter', viewValue: 'Twitter'},
    {value: 'Facebook', viewValue: 'Facebook'},
    {value: 'Whatsapp', viewValue: 'Whatsapp'}
  ];
  selectedEnv = this.envs[0].value;
  envService: string; // service
  ngOnInit(): void {
    this.variationService.probability$
      .subscribe(
        res => {
          this.probabilityserv = res;
          if (this.probabilityserv === undefined){
            this.probabilityserv = 0.5 * 100;
          }else {
            this.probabilityserv = res * 100;
          }
          console.log('serv create: ' + this.probabilityserv);
        }
      );
    this.agentService.agents$
      .subscribe(
        res => {
          function xinspect(o, i) {
            if (typeof i === 'undefined') {
              i = '';
            }
            if (i.length > 500) {
              return '[MAX ITERATIONS]';
            }
            const r = [];
            for (const p in o) {
              const t = typeof o[p];
             // r.push(i + '"' + p + '" (' + t + ') => ' + (t === 'object' ? 'object:' + xinspect(o[p], i + '  ') : o[p] + ''));
              // p(0) = environment
              r.push(o[p]);
            }
          /*  console.log('Namelog' + r);
            console.log('Participationlog' + r[0]);
            console.log('Minlog' + r[0]);
            console.log('Maxlog' + r[0]);
            return r.join(i + '\n'); */
            return r;
          }
          this.dataFromAgent = xinspect(res, '');
          console.log(this.dataFromAgent[0].participation + 'datos a create');
          console.log(this.dataFromAgent[1].participation + 'datos a create');
          console.log(this.dataFromAgent[2].participation + 'datos a create');
          this.participationHub = this.dataFromAgent[0].participation;
          this.maxUserLinksHub = this.dataFromAgent[0].maxUserLinks;
          this.minUserLinksHub = this.dataFromAgent[0].minUserLinks;
          this.seedParticipationHub = this.dataFromAgent[0].participation;
          this.seedMaxUserLinksHub = this.dataFromAgent[0].maxUserLinks;
          this.seedMinUserLinksHub = this.dataFromAgent[0].minUserLinks;
          this.participationOpinionLeader = this.dataFromAgent[1].participation;
          this.maxUserLinksOpinionLeader = this.dataFromAgent[1].maxUserLinks;
          this.minUserLinksOpinionLeader = this.dataFromAgent[1].minUserLinks;
          this.seedParticipationOpinionLeader = this.dataFromAgent[1].participation;
          this.seedMaxUserLinksOpinionLeader = this.dataFromAgent[1].maxUserLinks;
          this.seedMinUserLinksOpinionLeader = this.dataFromAgent[1].minUserLinks;
          this.participationCommon = this.dataFromAgent[2].participation;
          this.maxUserLinksCommon = this.dataFromAgent[2].maxUserLinks;
          this.minUserLinksCommon = this.dataFromAgent [2].minUserLinks;
          this.seedParticipationCommon = this.dataFromAgent[2].participation;
          this.seedMaxUserLinksCommon = this.dataFromAgent[2].maxUserLinks;
          this.seedMinUserLinksCommon = this.dataFromAgent[2].minUserLinks;
          this.hub = this.dataFromAgent[0].name;
          this.opinionLeader = this.dataFromAgent[1].name;
          this.comon = this.dataFromAgent[2].name;
        }
      );
    // const envi = 'twitter'; // Acá mostrar agente
    // (tamañoRed,50%hub,50%average, seguidores de cada uno, cuantos de ellos )

    // Definir red: porcentaje de participacion en la red
    // let twitter = new twitterAgent(false, 10, 1);
    // let simu = new Misimulacion();
    // simu.CreateAgent();
    // this.imprimir();
   // var envir = document.getElementsByClassName('form-control');
   // console.log(envir);
   /* this.dataService.environment$.subscribe(res => {
      console.log('environment', res);
      this.envService = res;
    });*/
    // ['idSimulation', 'idAgent', 'period', 'values'];
  }
  private buildForm() {

    this.form = new FormGroup({
      environment: new FormControl('', [Validators.required]),
     // Environmen: new FormControl('', [Validators.required]),
      periods: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
      networkSize: new FormControl('', [Validators.required]),
    //  simulations: new FormControl('', [Validators.required]),
    //  userLinksMin: new FormControl('', [Validators.required]),
    //  userLinksMax: new FormControl('', [Validators.required]),
    //  userParticipation: new FormControl('', [Validators.required]),
    //  userType: new FormControl('', [Validators.required]),
    //  influenceMin: new FormControl('', [Validators.required]),
    //  influenceMax: new FormControl('', [Validators.required]),
    });
    this.agentService.agents$
      .subscribe(
        res =>  {
          this.agentArray = res;
          console.log(res[0].participation + '********');
        });

    this.form.valueChanges
      .pipe(
         debounceTime(1200)
      )
      .subscribe(value => {
        this.environ = value.environment;
        if (this.environ === '1'){
          this.variation = 1;
          this.environ = 'Twitter';
        }else{
          if (this.environ === '2'){
            this.variation = 2;
            this.environ = 'Whatsapp';
          }else{
            this.variation = 3;
            this.environ = 'Facebook';
            }
        }

        console.log(value);
        this.envService = value.environment;
        console.log(value.environment + ' Info: 1: Twitter, 2: Facebook, 3: Whatsapp');
        this.message = value;
        this.environmentf = value.environment;
        this.periodsf = value.periods;
        this.networksizef = value.networkSize;
        console.log('environmentf' + this.environmentf);

        // this.messageService.sendMessage(value);
        const datitos = [
          [1, 1, 0, 111],
          [1, 2, 0, 222],
          [1, 3, 0, 333],
          [1, 4, 1, 444],
        ];
        console.log(datitos);
        this.reportData = datitos;
        console.log(this.reportData);
      //  excel(reportData)
      //  const env = new TwitterEnv();
      //  const newSimulation = new TwitterSimulation(env, 2, 2);
      //  const seed: ABMdata = new ABMdata( true, 1, 2, 0.005, 4);
      //  const hub: ABMdata = new ABMdata(false, 10, 15, 0.1, 1);
      //  newSimulation.createNetwork(seed);
      //  newSimulation.createNetwork(hub);
      //  newSimulation.createFollowers();
      //  newSimulation.printNetwork();
      //  console.log(newSimulation.getPeriods());
      });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid)
    {
      const value = this.form.value;
      console.log(value.seed);
    //  let environ = value.environment;
      const envSimulation = value.environment;
      switch (envSimulation) {
        case 'Twitter': {
          console.log('Twitter');
       //   const env = new TwitterEnv();
       //   const newSimulation = new TwitterSimulation(env, value.periods, value.networkSize);
       //   const seed: ABMdata = new ABMdata(true, 1, 2, 0.005, 4);
       //   newSimulation.createNetwork(seed);
       //   newSimulation.printNetwork();
          break;
        }
        case 'Whatsapp': {
          console.log('Whatsapp');
          break;
        }
        case 'Facebook': {
          console.log('Facebook');
          break;
        }
        default: {
          console.log('invalid');
          break;
        }
      }
    }
  }
  run(){
    /*const env = new TwitterEnv();
    this.newSimulation = new TwitterSimulation(env, 5, 30);
    const seedy = false;

    this.hubSeed = new ABMdata(true, 0,
      10,
      10, 1);
    this.newSimulation.createNetwork(this.hubSeed);
    console.log(this.hubSeed);

      this.hubc = new ABMdata(seedy, 0,
        10,
        30, 1);
      this.newSimulation.createNetwork(this.hubc);
      console.log(this.hubc);


      this.leader = new ABMdata(seedy, 0,
        10,
        30, 2);
      this.newSimulation.createNetwork(this.leader);
    console.log(this.leader);

      this.common = new ABMdata(seedy, 0,
        20,
        30, 3);
      this.newSimulation.createNetwork(this.common);
    console.log(this.common);




    this.newSimulation.createFollowers();
    this.newSimulation.run();
    this.reportData = this.newSimulation.getHistory().getNetworkHistory();
    // this.agentService.sendArray(this.reportData); // Enviar datos a create
    console.log(this.newSimulation.getHistory().getNetworkHistory());
    this.excelService.generateExcel(this.reportData);
     */
    this.messageService.sendMessage(this.message);
  }
  generateExcel(reportData: any) {
    this.excelService.generateExcel(reportData);
  }
  excel(){
    this.generateExcel(this.reportData);
  }

 /* imprimir(){
    const abmdata = new ABMdata(false, 1, 2, 3);
    console.log(abmdata.getSeed());
  }*/
  openRules() {
    const dialog = this.rulesDialog.open(AgentsComponent, {
      width: '800px',
      data: '',
      /*disableClose: true*/
  });
  }
  openAgent(env: number) {
    console.log('openvariation ' + env);
    if (env === 1) {
      const dialog = this.rulesDialog.open(AgentComponent, {
        width: '800px',
        data: this.envService,
        /*disableClose: true*/
      });
    }else{
      if (env === 2) {
        const dialog = this.rulesDialog.open(AgentWhatsappComponent, {
          width: '800px',
          data: this.envService,
          /*disableClose: true*/
        });
      }else{
        if (env === 3) {
          const dialog = this.rulesDialog.open(AgentFacebookComponent, {
            width: '800px',
            data: this.envService,
            /*disableClose: true*/
          });
        }
      }
    }
  }
  openVariations(env: number) {
    console.log('openvariation ' + env);
    if (env === 1) {
      const dialog = this.rulesDialog.open(VariationsComponent, {
        width: '800px',
        data: '',
        /*disableClose: true*/
      });
    }else{
     if (env === 2){
       const dialog = this.rulesDialog.open(VariationWhatsappComponent, {
         width: '800px',
         data: '',
         /*disableClose: true*/
       });
     }else{
       if (env === 3){
         const dialog = this.rulesDialog.open(VariationFacebookComponent, {
           width: '800px',
           data: '',
           /*disableClose: true*/
         });
       }
     }
    }
  }
}
