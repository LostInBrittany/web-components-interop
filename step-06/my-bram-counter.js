let template=`
 <style>
      .container {
        display: block;
        font-size: 5rem;
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #444444;
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
        color: #ccc;
      }
    </style> 
    <div class="container">
        <div class="button"  on-click="increase">
            <img src="./img/bram.png">
        </div>
        <div class="value" > {{counter}} </div>
    </div>`;

class MyBramCounter extends Bram(HTMLElement) {
  
  static get template() {
    let t = document.createElement('template');
    t.innerHTML = template;
    return t;
  }

  static get events() {
    return ['counter-changed']
  }

  constructor() {
    super();
    this.model.counter = this.getAttribute('counter') || 0;
    // console.log(this.model);
  }
  
  static get observedProperties() { return [ 'counter' ] }  //Non documented

  increase() {
    this.model.counter++;
    this.dispatchEvent(new CustomEvent('counter-changed', {detail: {counter: this.model.counter}}));
  }
}

customElements.define('my-bram-counter', MyBramCounter);    
// console.log(document.createElement('my-bram-counter').constructor)