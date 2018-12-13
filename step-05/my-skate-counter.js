import { props, withComponent } from '/node_modules/skatejs/dist/es/index.js';
import withLitHtml from '/node_modules/@skatejs/renderer-lit-html/dist/es/index.js';
import { html } from '/node_modules/lit-html/lit-html.js';

class MySkateCounter extends withComponent(withLitHtml()){

  static get props () {
    return {
      // By declaring the property an attribute, we can now pass an initial value
      // for the count as part of the HTML.
      counter: props.number({ attribute: true })
    };
  }

  render({ counter }) {
    return html`
    <style>
      :host {
        display: block;
        font-size: 5rem;
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #aaaaff;
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
        background-color: #aaa;
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
    <div class="container">
      <button class="button" @click="${() => this.increment()}"><img src="./img/skate.png" alt="Polymer"></button>
      <div class="value">${counter}</div>
    </div>`;
  }

  increment() {
    console.log('sdgws', this.counter)
    this.counter = Number.parseInt(this.counter) + 1;
    this.dispatchEvent(new CustomEvent('increased', {detail: {counter: this.counter}}));
  }

}


window.customElements.define('my-skate-counter', MySkateCounter);  