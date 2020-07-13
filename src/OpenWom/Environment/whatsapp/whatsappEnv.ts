import {environment} from '../../Essential/Environment';

class whatsappEnv extends environment{






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


