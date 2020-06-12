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

    _focus() {
        this.patch({
            smooth: { 
                alpha: [1, { duration: 0.5 }], 
                scale: [1.05, { duration: 0.5 }],
            }
        });
    }

    _unfocus() {
        this.patch({
            smooth: { 
                alpha: [0.5, { duration: 0.5 }], 
                scale: [1, { duration: 0.5 }],
            }
        });
    }

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
            this.setSmooth("alpha", 0.2, { duration: 1});
        });
    }
}