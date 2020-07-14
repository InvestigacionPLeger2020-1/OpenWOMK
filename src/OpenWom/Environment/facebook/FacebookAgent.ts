import {Agent} from '../../Essential/Agent';


// este deberia ser suficiente para todos los agentes de facebook
export class FacebookAgent extends Agent {

  // lectura puede ser un numero determinado mayor que 1 menos la probabilidad de lectura
  // retweet puede ser un numero determinado mayor que 1 menos una influencia
  protected participation: number; // que es esto
  protected influence: number;


  constructor(influence: number) {
    super(); // modify
    this.influence = influence;
  }

  createAction(): any {
    console.log('crear accion');
  }

  createRule(): any {
    console.log('crear regla');
  }
}


