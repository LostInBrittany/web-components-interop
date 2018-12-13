import { Slim } from '/node_modules/slim-js/Slim.js'

let template = `
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
      }
    </style> 
    <div class="container">
        <div class="button"  slim-id="button" click='increment'>
            <img src="./img/slim.png">
        </div>
        <div class="value" bind> {{toString(counter)}} </div>
    </div>`;

Slim.tag('my-slim-counter', template,

  class extends Slim {

    // native API
    static get observedAttributes() {
      return ['counter'];
    }

    // bind attributes to properties
    // when 'counter' attribute changed - it is reflected to the property, and the component alters the relevant text node.
    get autoBoundAttributes() {
      return ['counter'];
    }

    increment() {
      this.counter = this.counter + 1;
      this.dispatchEvent(new CustomEvent('increased', { detail: { counter: this.counter } }));
    }

    toString(value) {
      return value.toString();
    }
  });



