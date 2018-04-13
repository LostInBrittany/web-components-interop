import { props, withComponent } from '/node_modules/skatejs/dist/esnext/index.js';

class MySkateCounter extends withComponent() {

  constructor() {
    super();
    this.counter = this.counter || 0;
    this.addEventListener('click', e => this.increment());
  }
  
  static get props() {
    return {
      // By declaring the property an attribute, we can now pass an initial value
      // for the count as part of the HTML.
      counter: props.string
    };
  }

  render({ counter }) {
    return `
      ${this.style()}
      <div class="container">
        <div class="button">
            <img src="./img/skate.png">
        </div>
        <div class="value"> 
          ${counter}
        </div>
      </div>`;
  }

  increment() {
    this.counter = Number.parseInt(this.counter) + 1;
    this.dispatchEvent(new CustomEvent('counter-changed', {detail: {counter: this.counter}}));
  }

  style() { return `
    <style> 
      .container {
        display: block;
        font-size: 5rem;
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #aaa;
      }
      .button {
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
      .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around; 
        align-items: center;
      }
      .value {
        margin: 0.5rem;
      }
    </style>   
    `;
  }
}

customElements.define('my-skate-counter', MySkateCounter);