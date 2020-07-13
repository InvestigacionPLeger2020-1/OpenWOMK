import { twitterAgent } from '../../Environment/twitter/twitterAgent';

export class averageUser extends twitterAgent{
    constructor(influence: number, state: string,  followers: number, characteristics: string, participation: number,  readProbability: number){
        super(influence, state, followers,participation, readProbability);
    }

    averageUser(participation:  number, followers: number, state: string, readProbability: number){
        this.participation=participation;
        this.followers=followers;
        this.state=state;
        this.readProbability= readProbability;



    }


}
