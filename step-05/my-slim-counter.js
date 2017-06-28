Slim.tag('my-slim-counter', class extends Slim {
    get template() {
        return '<div style="display: flex; flex-flow: row wrap;font-size: 5rem;justify-content: space-around; align-items: center; background-color: rgb(170, 255, 170); padding: 1rem; border-radius: 0.5rem;"><div style="width: 7rem; height: 7rem; border-radius: 1rem; margin: 0.5rem; display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; background-color: rgb(221, 221, 221); cursor: pointer; border-width: 2px; border-style: outset; border-color: buttonface;"><img src="./img/web-components.png"></div><div style="margin: 0.5rem;"> [[counter]] </div></div>';
    }
    onBeforeRender() {
        this.counter = this.getAttribute('counter'); 
        console.log(this.counter)
    }
    static get observedAttributes() { return [ 'counter' ] }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log(attr);
        if (oldVal !== newVal) {
            this[attr] = newVal;
        }
        console.log(this.counter)
    }
});

