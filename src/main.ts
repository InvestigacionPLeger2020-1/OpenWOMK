import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {hub} from './OpenWom/Scenarios/hub/hub';
import { agent } from './OpenWom/Essential/Agent/agent';
import { twitterAgent } from './OpenWom/Environment/agentTwitter/twitterAgent';
import { simulation } from './OpenWom/Essential/simulation/Simulation';

if (environment.production) {
  enableProdMode();
}
const simulations = 2;

for (let i = 0; i < simulations; i++){

  console.log(i);
}

const  hubs = new hub(2, 'read', 2, 2, 2, '2');

const hub1 = new hub(1, 'read', 2, 2, 2, 'sta');

console.log('el estado es: ');

hubs.addFollower(hub1);
const followerslist: Array<hub> = hubs.getFollowers();
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
*/

// let c2: Array<hub>;
let c2: hub;
c2 = new hub( 2, 'a', 2, 2, 2, 'a');
const state: string = c2.getState();
console.log(state);
console.log(simu.getdif());
console.log(simu.getsum());


/*
createUsers(): any {
  console.log('Empezo crear users');
 // for i= seedsize< networksize
  for (let i=0; i<2; i++) {
      consumers.push(new hub(2,'read',2,2,2,'2'));
     /* user.setID(i);

      users.add(user);
      allUsers.add(user);
      *//*
  }
  console.log('Termino crear users');
}
*/




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
