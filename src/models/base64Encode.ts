export default function base64Encode(srt){
    if(typeof srt !== 'string'){
        if(typeof srt !== 'number'){
            srt = srt.toString();
        }else{
            throw new Error('error to encode!');
        }
    }
    return Buffer.from(srt, 'utf8').toString('base64');
 }