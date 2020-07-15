import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '../../app/app.module';
import {environment} from '../../environments/environment';
import {Agent} from '../Essential/Agent';
import {twitterAgent} from '../Environment/twitter/twitterAgent';
import {State} from '../Essential/State';
import {States} from '../Essential/States';
// import {Simulation} from '../Essential/Simulation';

if (environment.production) {
  enableProdMode();
}
// -----------------------------------------------------------------------------------------------------------------------
/*
//const simulations = 2;
//const networksize = 100;
// aqui falta algo
// hub, 100-200, 10% red = 10, 5%
// if(math.random()>probRetweet + getinfluence(5%)
// se reciba array = [type,Fmin, Fmax,%participation,influence]




for (let i = 0; i < simulations; i++){

  console.log(i);
}

const  hubs = new hub(2, 'read', '2');

const hub1 = new hub(1, 'read', '2');

console.log('el estado es: ');

hubs.setfollowers(hub1);
const followerslist: Array<hub> = hubs.getfollowers();
console.log('estado ' + followerslist[0].getState());
// tslint:disable-next-line:prefer-const
let consumers: Array<any> ; // ver

// tslint:disable-next-line:triple-equals
if (hubs.getState() == 'read'){

  console.log(hubs.getState());
  console.log('se leyo');
}
else{
  console.log('no se leyo');
}
const simu = new simulation();
// tslint:disable-next-line:prefer-const
let c: Array<hub>;

// tslint:disable-next-line:prefer-const
let twitter: twitterAgent;
const op = 1;
// tslint:disable-next-line:triple-equals
if (op == 1){
  // twitter.createAgent(op);

}

/*for(let i=0; i<1; i++){
  c= simu.createAgent(i);
  console.log(typeof(c));
  let state: string= c[0].getState();

  console.log(state);
}


// let c2: Array<hub>;
let c2: hub;
c2 = new hub( 2, 'a', '2', 2, 2);
const state: string = c2.getState();
console.log(state);
console.log(simu.getdif());
console.log(simu.getsum());


const type = 1; // hub crearAgente(type)
// definir antes cuantos seran hub = 10, average = 2, opinionLeader = 3

/* switch (type) {
if(type == 1){
   entorno creartwitter()

} else{
 entorno whatsapp
}

const agente = new hub(2, 'stado', '2s', 2);
console.log(agente.getState());
agente.setfollowers(hubs);
console.log(agente.getfollowers());
agente.setState('read');
console.log(agente.getState());



 */

const network: any[] = [];
const envSimulation: any = 'Twitter';
switch (envSimulation) {
  case 'Twitter': {
    console.log('Twitter');
    createTwitterAgent(data());
    break;
  }
  default: {
    console.log('invalid');
    break;
  }
}

function createMapState(agent: Agent, nom: string){

}

function data(): any[] {
  // ------------------------------------------
  const typeAgent = 1;      // 1=hub; 2=opinionLeader; 3=commonUser
  const networkSize = 1000;
  const followMin = 100;
  const followMax = 150;
  const participation = 0.05;
  const influenceMin = 0.03;
  const influenceMax = 0.06;
  const readMin = 0.1;
  const readMax = 0.15;
// ---------------------------------------------
  const parameters: any[] = [typeAgent, networkSize, followMin, followMax, participation, influenceMin, influenceMax, readMin, readMax];
  return parameters;
}

function createTwitterAgent(array: any[]): void {
  const totalAgent: number = Math.trunc(array[1] * array[4]);
  for (let i = 0; i < totalAgent; i++) {
    const nFollowers: number = Math.trunc(Math.random() * (array[3] - array[2]) + array[2]);
    const influence: number = (Math.random() * (array[6] - array[5]) + array[5]).toFixed(3);

    if (array[0] === 1) {
      const newAgent: twitterAgent = new twitterAgent (false, nFollowers, 1);
      network.push(newAgent);
      console.log(newAgent.getId() + ' ' + newAgent.getIsSeed());
      newAgent.getIsSeed();

    }
  }
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));







