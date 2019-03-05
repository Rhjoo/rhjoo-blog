---
title: Building a Simple Todo App with React and vanilla JavaScript, Introduction
date: "2019-03-04"
---

Building a todo app seems to be the rite of passage for many when it comes to developing any software. Here I show how I built pretty much the same app using vanilla JavaScript and using React. 

Follow the links for quick demo of the apps, one using [vanilla JS](https://rhjoo.github.io/todo-js/), the other using [React](https://rhjoo.github.io/todo-react/). It won't have the bells and whistles of toggle all buttons, etc. like the ones you would see at [TodoMVC](http://todomvc.com/). My goal is to simply display user input on the screen, then add ability to remove it from the screen. If you're a noob like me and if that sounds like a good place to start, then follow along.

Although it may sound contrary to your intuition, I will start by showing you how I wrote the codes for the React app first. This is because I think using React may be more intuitive for someone just starting out in terms of building a UI. Later, when I show you the codes for the vanilla JavaScript app, you will realize how much React abstracts away the complexity involving interaction with the DOM, especially when we get to building the remove button functionality.