interface Iaction {
    shareProbability ?: number;
    readProbability ?: number;
  }

interface Itwitter extends Iaction{
  asdads: string;
  }
interface Ifacebook extends Iaction {
  likes: number;
}
interface Iwhatsapp extends Iaction {
  resend: number;
}


// tslint:disable-next-line:no-shadowed-variable
function retweet(Iaction: Itwitter){
  const shareProbability = 10;
  console.log('accion de retweet');
  }


let Itwitter = {
  asdads : 'asd'
};

