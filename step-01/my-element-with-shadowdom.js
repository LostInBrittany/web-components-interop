class MyElementWithShadowDom extends HTMLElement {
    
  // This gets called when the HTML parser sees your tag
  constructor() {
    super(); // always call super() first in the ctor.
    this.msg = 'Hello from inside the ShadowDOM, Bordeaux JUG!';
    this.attachShadow({ mode: 'open' });
  }
  // Called when your element is inserted in the DOM or
  // immediately after the constructor if it’s already in the DOM
  connectedCallback() {
    this.shadowRoot.innerHTML = `<p>${this.msg}</p>`;
  }
}

customElements.define('my-element-with-shadowdom', MyElementWithShadowDom);