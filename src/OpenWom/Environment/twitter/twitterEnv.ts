import {environment} from '../../Essential/Environment';


export class twitterEnv extends environment {
  /*
      public followerArray: Array<agent>;
      public agentArray: Array<agent>;

      */

  //lista de memoria t, t+1


  /*twitter({ followerArray, agentArray }: { followerArray: agent[]; agentArray: agent[]; }){
      this.followerArray=followerArray;
      this.agentArray,
      agentArray;
  }
*/

  //tomar los metodos de twitter agent

  createConsumers() { //rellenar

  }

  createSeeds() {

  }


  getAction() {
    console.log('action');
  }

  getLectureProbability(): any {
    console.log('lecture');
  }

  getVariation() {
    console.log('variation');
  }

  getNetwork(): any {
    console.log('network');
  }


  /* getRetweetProbability(){
       return this.retweetProbability;
   }

   getWear(){
       return this.wear;
   }

   setWear(){
       return this.wear;
   }

*/


}
