class MyCounter extends HTMLElement {
    
  constructor() {
    super();
    this._counter = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() { this.render() }
  
  static get observedAttributes() { return [ 'counter' ] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  get counter() { return this._counter; }
  set counter(value) { 
    if (value != this._counter) {
      this._counter = Number.parseInt(value);
      this.setAttribute('counter', value);
      this.display();
    }
  }

  increment() {
    this.counter = this.counter + 1;
  }
  
  render() {
    let button = document.createElement('button');
    button.innerHTML = '+';
    button.addEventListener('click', this.increment.bind(this));
    this.shadowRoot.appendChild(button);

    this.output = document.createElement('span');
    this.shadowRoot.appendChild(this.output);

    this.style.display = 'block';
    this.style.fontSize = '5rem';
    button.style.fontSize = '5rem';
    button.style.borderRadius = '1rem';
    button.style.padding = '0.5rem 2rem';
    this.output.style.marginLeft = '2rem';
  }

  display() {
    this.output.innerHTML = `${this.counter}`;
  }


}

customElements.define('my-counter', MyCounter);