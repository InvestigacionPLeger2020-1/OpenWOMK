import {Agent} from '../../Essential/Agent';
import {sanitizeIdentifier} from '@angular/compiler';

// tslint:disable-next-line:class-name
export class twitterAgent extends Agent {
  protected seed: boolean;
  protected readProbability: number;
  protected shareProbability: number;
  protected wear: number;
  protected type: number;
  protected follower: number; // Numero de seguidores que tiene.

  // message
  // state readed-no readed ; retweeted-no retweteed?
//    estado como una clase aparte que esta con agente generico, el estado en el agente abstracto puede estar como un elemento,


// tslint:disable-next-line:max-line-length
  constructor(influence ?: number, id ?: number, readProbability ?: number, follower ?: number) {
    super(influence, id);
    this.readProbability = readProbability;
    this.follower = follower;
  }

  createAction(): void { // read and retweet

    if ((this.readProbability) < Math.random()) {
      this.setState('read');

      if ((this.shareProbability) > Math.random()) { // posible influencia??
        this.setState('retweeted');

      }


    }
    /*  CODIGO DEL PROFE SOBRE MENSAJE INFLUENCIA, TOMAR EN CUENTA
        private void receiveMessage(double messageInfluence) {
            this.message = true;
            this.messageInfluence = messageInfluence;
        }
        */

  }

  imprimir(): void {
    console.log(this.state);
  }


  getState(): string {

    return this.state;

  }

  setState(state: string): void {
    this.state = state;
  }

  getNextState(): string {
    return this.nextState;
  }

  setNextState(nextState: string): void {
    this.nextState = nextState;
  }

  createRule(): any {

    console.log('crear regla'); // reglas como metodos a acciones con determinadas reglas??

  }

  isSeed(): boolean {
    this.seed = true;
    return this.seed;
  }

}





