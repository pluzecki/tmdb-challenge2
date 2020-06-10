import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List} from "../components"

export default class Main extends Lightning.Component{
    static _template() {
        const timingFunction = 'cubic-bezier(0.20, 1.00, 0.80, 1.00)';

        return {
            rect: true,
            w: 1920,
            scale:0.9,
            Lists: {
                rect: true,
                x: 100, y: 560, zIndex: 3,
            },
            Logo: {
                src: Utils.asset("images/logo.png"),
                mount: .5, x: 960, y: 0, alpha: 0.0001,
                transitions: {
                    alpha: {duration: 1, timingFunction},
                    y: {duration: 1, timingFunction}
                }
            },
        };
    }

    _init() {
        this._index = 0; 

        this.tag("Logo").on("txLoaded", () => {
            this.patch({
                smooth: { scale: 1 },
                Logo: { smooth: { alpha: 1, y: 140, }},
            })
        })
    }

    _focus() {

    }

    set movies(movies) {
        // this.tag('Lists').children = [
        //     {type: List, movies: movies}
        // ];
        this.tag('Lists').patch({
            List: { type: List, movies: movies },
        });
    }

    _unfocus() {
        // @todo
    }

    _getFocused() {
        return this.tag('Lists.List');
    }

    _handleSpace() {
        console.log('space2');
    }
}