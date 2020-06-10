import {Lightning, Utils} from "wpe-lightning-sdk";
import { getPosterUrl } from '../../lib/api';

export default class Level extends Lightning.Component{
    static _template(){
        return {
            alpha: 0.00001,
            w: 200,
            Image: { },
            Title: {
                y: 310, 
                x: 100,
                w: w => w,
                mountX: 0.5,
                text: {fontFace: "SourceSansPro-Regular", fontSize: 24}
            }
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */

    set item(v){
        this.patch({
            Image: {
                src: getPosterUrl(v.poster_path),
            },
            Title: {
                text: {
                    text: v.title,
                },
            }
        });
        this.tag("Image").on("txLoaded", ()=> {
            this.setSmooth("alpha", 1, { duration: 5});
        });
    }
}