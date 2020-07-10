import {agent} from '../../Essential/Agent/agent'
import { sanitizeIdentifier } from '@angular/compiler';

export class twitterAgent extends agent{

  protected participation: number;
  protected seed: boolean;
  protected readProbability: number;
  protected shareProbability: number;
  protected retweetProbability: number;
  protected wear: number;
  


    //message
    //state readed-no readed ; retweeted-no retweteed?
//    estado como una clase aparte que esta con agente generico, el estado en el agente abstracto puede estar como un elemento,


constructor(influence ?: number , state ?: string, followers ?: number, participations ?: number,  readProbability ?: number){
       super(influence, state, followers);
       this.participation = participations;
       this.readProbability = readProbability;
   }

    createAction(): void{ //read and retweet

    if((this.readProbability)<Math.random() ){
        this.setState('read');

        if((this.shareProbability)>Math.random()){ //posible influencia??
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

  

   imprimir(): void{
       console.log(this.state);
   }

 

   getState(): string{
       
       return this.state;
    
   }
   setState(state: string): void{
       this.state=state;
   }

   createRule(): any{

    console.log('crear regla'); //reglas como metodos a acciones con determinadas reglas??

   }

   isSeed(): boolean{
        this.seed=true;
       return this.seed;
   }

}

 
 


