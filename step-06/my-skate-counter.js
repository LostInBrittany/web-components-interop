class MySkateCounter extends skate.Component {

  static get props () {
    return {
      // By declaring the property an attribute, we can now pass an initial value
      // for the count as part of the HTML.
      counter: skate.prop.number({ attribute: true })
    };
  }

  renderCallback () {
      console.log("render", skate.h('div',{},'hello'));
    // By separating the strings (and not using template literals or string
    // concatenation) it ensures the strings are diffed indepenedently. If
    // you select "Count" with your mouse, it will not deselect whenr endered.
    return [
        skate.h('style', {}, '.container { display: block; font-size: 5rem; border-radius: 0.5rem; padding: 1rem; background-color: #aaa;  display: flex; flex-flow: row wrap; justify-content: space-around;  align-items: center; }'),
        skate.h('style', '.button { width: 7rem; height: 7rem; border-radius: 1rem; margin: 0.5rem; display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; background-color: #ddd; cursor: pointer; border-width: 2px; border-style: outset; border-color: buttonface; border-image: initial;  }'),
        skate.h('style', {}, '.value { margin: 0.5rem; color: #eee;'),
        skate.h('div', { 'class': 'container'}, 
            skate.h('div', 
              {
                'class': 'button' ,
                'onClick': () => {
                  this.counter++; 
                  console.log("Increased", this.counter)
                  skate.emit(this, 'counter-changed', { detail: { counter: this.counter } });
                }
              }, 
              skate.h('img', { 'src' : './img/skate.png' })),
            skate.h('div', { 'class': 'value'}, this.counter)   
        )
    ];
  }
}


skate.define('my-skate-counter', MySkateCounter);  
//console.log(document.createElement('my-skate-counter').constructor)