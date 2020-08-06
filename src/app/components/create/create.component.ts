import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AgentsComponent} from '../forms/agents/agents.component';
import {AgentComponent} from '../agent/agent/agent.component';
import {VariationsComponent} from '../variations/variations/variations.component';
import {TwitterAgent} from '../../../OpenWom/Environment/twitter/twitterAgent';
import { Simulation} from '../../../OpenWom/Essential/Simulation';
import getDocumentElement from '@popperjs/core/lib/dom-utils/getDocumentElement';
import { ABMdata} from '../../../OpenWom/Essential/ABMdata';
import {stringify} from 'querystring';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {TwitterEnv} from '../../../OpenWom/Environment/twitter/TwitterEnv';
import {TwitterSimulation} from '../../../OpenWom/Environment/twitter/TwitterSimulation';
import {DataService} from '../../services/data.service';
import {Subject} from 'rxjs';

interface Iabm{
  environment: string;
  seed: string;
  Environmen: string;
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
   subscription: any;
  constructor(public rulesDialog: MatDialog, private messageService: DataService) {
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
  }
  private buildForm() {

    this.form = new FormGroup({
      environment: new FormControl('', [Validators.required]),
      seed: new FormControl('', [Validators.required]),
      Environmen: new FormControl('', [Validators.required]),
      periods: new FormControl('', [Validators.required]),
      networkSize: new FormControl('', [Validators.required]),
      userLinksMin: new FormControl('', [Validators.required]),
      userLinksMax: new FormControl('', [Validators.required]),
      userParticipation: new FormControl('', [Validators.required]),
      userType: new FormControl('', [Validators.required]),
      influenceMin: new FormControl('', [Validators.required]),
      influenceMax: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        console.log(value);
        this.envService = value.environment;
        console.log(value.environment);
        this.message = value.environment;
        this.messageService.sendMessage(value);
        const env = new TwitterEnv();
        const newSimulation = new TwitterSimulation(env, value.periods, value.networkSize);
        const seed: ABMdata = new ABMdata(value.seed, 1, 2, 0.005, 4);
        newSimulation.createNetwork(seed);
        newSimulation.printNetwork();
        console.log(newSimulation.getPeriods());
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
          const env = new TwitterEnv();
          const newSimulation = new TwitterSimulation(env, value.periods, value.networkSize);
          const seed: ABMdata = new ABMdata(value.seed, 1, 2, 0.005, 4);
          newSimulation.createNetwork(seed);
          newSimulation.printNetwork();
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

  EnviarDatos(environment, networkSize){
    console.log(environment);
    console.log(networkSize);
  }

  getEnv(id: string) {
    const ele = document.getElementById(id) as HTMLInputElement;
    alert(ele.value);
  }
  selected(event){
    console.log('llegó');
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
  openAgent() {
    const dialog = this.rulesDialog.open(AgentComponent, {
      width: '800px',
      data: this.envService,
      /*disableClose: true*/
  });
  }

  openVariations() {
    const dialog = this.rulesDialog.open(VariationsComponent, {
      width: '800px',
      data: '',
      /*disableClose: true*/
    });
  }
}
