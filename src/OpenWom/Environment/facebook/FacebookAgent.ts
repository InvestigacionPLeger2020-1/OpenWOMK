import {Agent} from '../../Essential/Agent';

// lectura puede ser un numero determinado mayor que 1 menos la probabilidad de lectura
// retweet puede ser un numero determinado mayor que 1 menos una influencia
// este deberia ser suficiente para todos los agentes de facebook

export class FacebookAgent extends Agent {
  protected influence: number;

  constructor(influence: number) {
    super(); // modify
    this.influence = influence; // si necesitas to track este valor, usen states
  }
}


