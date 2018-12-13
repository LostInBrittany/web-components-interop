import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';

class MyPolymerCounter extends PolymerElement {
  static get template() {
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
      <div class="container">
        <button class="button" on-click="increment"><img src="./img/polymer.png" alt="Polymer"></button>
        <div class="value">[[counter]]</div>
      </div>
    `;
  }
  static get properties() {
    return {
      counter: { type: Number, reflectToAttribute:true, value: 0 }
    };
  }
  increment() {
    this.counter = Number.parseInt(this.counter) + 1;
    this.dispatchEvent(new CustomEvent('increased', {detail: {counter: this.counter}}));
  }
}

window.customElements.define('my-polymer-counter', MyPolymerCounter);
