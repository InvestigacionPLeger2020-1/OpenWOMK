import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '../../app/app.module';
import {environment} from '../../environments/environment';
import {ABMdata} from '../Essential/ABMdata';
import {TwitterSimulation} from '../Environment/twitter/TwitterSimulation';
import {TwitterEnv} from '../Environment/twitter/TwitterEnv';

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

const envSimulation: any = 'Twitter';
switch (envSimulation) {
  case 'Twitter': {
    console.log('Twitter');
    const env = new TwitterEnv();
    const newSimulation = new TwitterSimulation(env, 5, 10);
    // ------------- aqui deberian entrar los datos de la interfaz grafica ----
    const seed1: ABMdata = new ABMdata(true, 5, 6, 0.1, 1);
    const seed2: ABMdata = new ABMdata(true, 3, 5, 0.1, 2);
    const hub: ABMdata = new ABMdata(false, 5, 6, 0.1, 1);
    const leader: ABMdata = new ABMdata(false, 3, 5, 0.1, 2);
    const common: ABMdata = new ABMdata(false, 0, 3, 0.6, 3);
    // ---aqui se deberia ejecutar el comando "create network" en un ciclo dependiendo de los datos que ingresen por la interfaz grafica---
    newSimulation.createNetwork(seed1);
    newSimulation.createNetwork(seed2);
    newSimulation.createNetwork(hub);
    newSimulation.createNetwork(leader);
    newSimulation.createNetwork(common);
    newSimulation.createFollowers();
    // newSimulation.printNetwork();
    console.log('-----------------------------');
    newSimulation.run();
    newSimulation.getHistory().consoleLogNetwork();
    // newSimulation.getHistory().getNetworkHistory();
    break;
  }
  default: {
    console.log('invalid');
    break;
  }
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));







