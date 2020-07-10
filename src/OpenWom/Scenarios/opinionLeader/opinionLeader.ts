import { twitterAgent } from '../../Environment/agentTwitter/twitterAgent';

export class opinionleader extends twitterAgent{
    characteristic: string
    constructor(influence: number, state: string,  followers: number, characteristics: string, participation: number,  readProbability: number){
       super(influence, state, followers,participation, readProbability);
       this.characteristic=characteristics;

    }

   opinionleader( characteristicasone: string, state:string, followers:number, readProbability: number){
        this.characteristic=characteristicasone;
        this.state=state;
        this.followers=followers;
        this.readProbability=readProbability;








    }
}