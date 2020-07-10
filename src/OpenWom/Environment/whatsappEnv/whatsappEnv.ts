import {environmentFactory} from '../../Essential/EnvFactory/environmentFactory';

class whatsappEnv extends environmentFactory{

  
  



    //lo de reglas y acciones deberian ir en agent
    getAction(): any{
        console.log('action');
    }

    getLectureProbability(): any{
        console.log('lecture');
    }

    getVariation(): any{
        console.log('variation');
    }

    getNetwork(): any{
        console.log('network');
    }


}


