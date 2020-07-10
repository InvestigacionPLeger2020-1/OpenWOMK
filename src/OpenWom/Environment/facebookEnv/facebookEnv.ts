import {environmentFactory} from '../../Essential/EnvFactory/environmentFactory';

class facebookEnv extends environmentFactory{



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