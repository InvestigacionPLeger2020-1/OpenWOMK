import {agent} from '../../Essential/Agent/agent';
// tslint:disable-next-line:class-name
class whatsappAgent extends agent{
    protected noc: boolean;


   constructor(noc: boolean, influence: number, state: string, followers: number){
       super(influence, state, followers);
       this.noc = noc;
   }

   createAction(): any{

    console.log('crear accion');

   }

   createRule(): any{

    console.log('crear regla');

   }


}

class whatsapp1 extends whatsappAgent{
    whatsapp: string;
    constructor(  noc: boolean, influence: number, state: string, followers: number, whatsapp: string, ){
        super( noc, influence, state, followers );
        this.whatsapp = whatsapp;

    }

}

