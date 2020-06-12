import {Lightning} from "wpe-lightning-sdk";
import { Item } from '..';

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'SourceSansPro-Regular'}
            },
            Movies: {
                x: 0,
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
        this._refocus();
    }

    _handleLeft() {
        if (this._index <= 0) return;

        this.setIndex(this._index-1);
    }

    _handleRight() {
        if (this._index >= (this._movies.length - 1)) return;

        this.setIndex(this._index+1);
    }

    setIndex(index) {
        this._index = index;
        this.patch({
            smooth: {
                x: [-200 * this._index, { duration: 0.5 } ]
            },
        });
    }

    set label(v) {
        // @todo: update list title
    }

    set movies(v) {
        this._movies = v;
        this.tag("Movies").children = v.map((el, idx)=>{
            return {
                type: Item, item: el, x: 200 * idx,
            };
        });
        this._refocus();
    }

    get items() {
        return this.tag("Movies").children;
    }

    get activeItem() {
        return this.items[this._index];
    }

    _getFocused() {
        return this.activeItem || false;
    }
}
