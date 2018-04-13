Slim.tag('my-slim-counter', `
    <style>
      my-slim-counter .container {
        display: block;
        font-size: 5rem;
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #ffbb00;
      }
      my-slim-counter .button {
        width: 7rem;
        height: 7rem;
        border-radius: 1rem;
        margin: 0.5rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
        cursor: pointer;
        border-width: 2px;
        border-style: outset;
        border-color: buttonface;
        border-image: initial;
      }
      my-slim-counter .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around; 
        align-items: center;
      }
      my-slim-counter .value {
        margin: 0.5rem;
        font-size: 5rem;
      }
    </style> 
    <div class="container">
        <div class="button"  s:id="button">
            <img src="./img/slim.png">
        </div>
        <div class="value" bind> {{counter}} </div>
    </div>`, 

class extends Slim {
    
    
    onBeforeCreated() {
       //  console.log('[my-slim-counter] Going to be created')
    }
    
    onRender() {
        // console.log('[my-slim-counter] before update', this.counter, this.getAttribute('counter'), Number.parseInt(this.getAttribute('counter')))

    }
    static get observedAttributes() { return [ 'counter' ] }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
        this[attr] = newVal;
        }
    }
    onCreated() {        
        console.log('[my-slim-counter] Created', this.counter)
        if (this.counter == undefined) {
             this.counter = Number.parseInt(this.getAttribute('counter'))||'0';
        }
        this.button.onclick = () => {
            this.counter++;
            this.dispatchEvent(new CustomEvent('counter-changed', {detail: {counter: this.counter}}));
        }
        
    }
});

// console.log(document.createElement('my-slim-counter').constructor)


