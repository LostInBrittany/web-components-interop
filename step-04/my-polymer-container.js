import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';

import '../step-03/my-polymer-counter.js';
import '../step-02/my-counter.js';


class MyPolymerContainer extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        font-size: 3rem;
      }
      .container {
          display: flex;
          flex-flow: row;
          justify-content: space-around;
      }
      .value {
      }
    </style> 
    <div class="container">
      <my-polymer-counter 
          counter="[[value]]"
          on-increased="_onCounterChanged"></my-polymer-counter>
      <my-counter
          counter="[[value]]"
          on-increased="_onCounterChanged"></my-counter>
    </div>
    <div class="container">
      <div class="value">Shared value: [[value]]</div>
    </div>
    `;
  }
  static get properties() {
    return {
      value: { type: Number, reflectToAttribute:true, value: 0 }
    };
  }    
  _onCounterChanged(evt) {
    console.log(evt)
      this.value = evt.detail.counter;
  }
}

window.customElements.define('my-polymer-container', MyPolymerContainer);
