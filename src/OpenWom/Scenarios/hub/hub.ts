import { twitterAgent } from '../../Environment/twitter/twitterAgent';

// tslint:disable-next-line:class-name
export class hub extends twitterAgent{
  // tslint:disable-next-line:max-line-length
    constructor(influence ?: number,  state ?: string, nextState ?: string, readprobability ?: number){
        super(influence, state, nextState, readprobability);

    }

    hub(followers: number, state: string, readProbability: number){
        this.readProbability = readProbability;
        this.state = state;


    }
// createAgent de prueba no cambiar
    createAgent(type: number): twitterAgent{ // primero random luego numero para el tipo
        const randomnum = Math.random();
        let consumer: twitterAgent;
        if (randomnum > 0.60){

          return  consumer = new hub(1, '2', '3', 4);
        } else if (randomnum > 0.30){

          return  consumer = new hub(6, '5', '4', 3);
        } else {

          return  consumer = new hub(1, '1', '1', 1);
        }

      }


  // tslint:disable-next-line:max-line-length
      createHub(influence ?: number,  state ?: string, nextState ?: string, followers ?: number, participation ?: number,  readprobability ?: number): hub {
        let consumer: hub;

    // return consumer= new hub (3,'3',3,3,3, '3');
        return consumer = new hub(influence, state, nextState, participation);
    }





}
