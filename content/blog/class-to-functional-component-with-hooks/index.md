---
title: From Class Component to Functional Component with Hooks
date: "2019-08-26"
---

It used to be that, in React if you wanted to use state, you had to use class components. However, after `useState` hook release, functional components can hold state as well. With all these changes, the syntax has been somewhat confusing to me. So, here I'm making a quick cheat sheet for myself to keep all the syntax straight. 

I'm simply creating a parent component with state, and a child component that receives props from the parent state. First we will use traditional class components for both parent and child components. Notice you have to use `constructor`, `super`, and `.bind` the methods inside the `constructor`. Also you have to use a lot of `this`.
```js
import React, { Component } from 'react'

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      initial: "hello"
    }
    this.clicked = this.clicked.bind(this);
  };

  clicked() {
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <Child clicked={this.clicked} />
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clicked}>Console state</button>
      </div>
    )
  }
}

export default Parent;
```
Now, let's explore different ways the child component can be written. Since it does not hold state, we will change it into a functional component. Notice you have to pass `props` into the component. Also, you no longer need to say `render()`.
```js
function Child(props) {
  return (
    <div>
      <button onClick={props.clicked}>Console state</button>
    </div>
  )
}
```
You can also directly pass into the component specific `props`. You can then omit `props` when it's used inside the child component.
```js
function Child({clicked}) {
  return (
    <div>
      <button onClick={clicked}>Console state</button>
    </div>
  )
}
```
In ES6, functional components can be written with an arrow function.
```js
const Child = (props) => {
  return (
    <div>
      <button onClick={props.clicked}>Console state</button>
    </div>
  )
}
```
Again, you can directly pass specific `props` into the component.
```js
const Child = ({clicked}) => {
  return (
    <div>
      <button onClick={clicked}>Console state</button>
    </div>
  )
}
```
Now, after [Class Fields](https://tylermcginnis.com/javascript-private-and-public-class-fields/) proposal, class components can create state without using `constructor` or calling `super`. You use less `this`, but still need to `.bind` the methods.
```js
class Parent extends Component {
  state = {
    initial: "hello"
  }
  clicked = this.clicked.bind(this);

  clicked() {
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <Child clicked={this.clicked} />
      </div>
    )
  }
}
```
Now, let's change the parent component into a functional component and also use `useState` hook to hold state. Here's [React document on useState hooks](https://reactjs.org/docs/hooks-state.html). You declare a new state variable and a function that updates the state. Notice methods inside the functional components are created with arrow functions. 
```js
import React, { useState } from 'react'

function Parent() {
  const [state, setState] = useState({ initial: "hello" });

  const changeState = () => {
    setState({ initial: "hola" });
  };
  
  const clicked = () => {
    console.log(state);
  }

  return (
    <div>
      <Child clicked={clicked} changeState={changeState} />
    </div>
  )
}

function Child(props) {
  return (
    <div>
      <button onClick={props.clicked}>Console state</button>
      <button onClick={props.changeState}>Change state</button>
    </div>
  )
}

export default Parent;
```
You can also destructure the props when you receive them in the child component.
```js
function Child({ clicked, changeState }) {
  return (
    <div>
      <button onClick={clicked}>Console state</button>
      <button onClick={changeState}>Change state</button>
    </div>
  )
}
```
I tend to prefer to create functional components using function declaration rather than using arrow functions. Something about seeing the word 'function' reinforces in my mind that I'm creating a function, not a variable. Well, that's pretty much it! 😃 

Tyler McGinnis' post on [Why React Hooks?](https://tylermcginnis.com/why-react-hooks/) was very helpful for this post and understanding hooks in general. 