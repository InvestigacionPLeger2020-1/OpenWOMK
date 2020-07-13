import {environment} from '../../Essential/Environment';

class facebookEnv extends environment{



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
