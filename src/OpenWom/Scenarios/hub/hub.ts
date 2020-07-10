import { twitterAgent } from '../../Environment/agentTwitter/twitterAgent';

// tslint:disable-next-line:class-name
export class hub extends twitterAgent{

    characteristicasone: string;
    protected followerArray: Array<hub>;
  // tslint:disable-next-line:max-line-length
    constructor(influence ?: number,  state ?: string, followers ?: number, participation ?: number,  readprobability ?: number, characteristicones ?: string){
        super(influence, state, followers, participation, readprobability);
        this.characteristicasone = characteristicones;
        this.followerArray = new Array<hub>();




    }

    hub( characteristicasone: string, followers: number, state: string, readProbability: number){
        this.characteristicasone = characteristicasone;
        this.followers = followers;
        this.readProbability = readProbability;
        this.state = state;


    }
    addFollower(follow: hub): void{
        this.followerArray.push(follow);
    }

     getFollowers(): Array<hub> {
        return this.followerArray;
    }
// createAgent de prueba no cambiar
    createAgent(type: number): twitterAgent{ // primero random luego numero para el tipo
        const randomnum = Math.random();
        let consumer: twitterAgent;
        if (randomnum > 0.60){

          return  consumer = new hub(1, '2', 3, 4, 5, '6');
        } else if (randomnum > 0.30){

          return  consumer = new hub(6, '5', 4, 3, 2, '1');
        } else {

          return  consumer = new hub(1, '1', 1, 1, 1, '1');
        }

      }


  // tslint:disable-next-line:max-line-length
      createHub(influence ?: number,  state ?: string, followers ?: number, participation ?: number,  readprobability ?: number, characteristicones ?: string): hub {
        let consumer: hub;

    // return consumer= new hub (3,'3',3,3,3, '3');
        return consumer = new hub(influence, state, followers, participation, readprobability, characteristicones);
    }





}
