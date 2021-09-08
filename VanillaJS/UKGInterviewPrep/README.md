# UKG Interview Prep

## What is a Design System?

Design System is a comprehensive guide for project design – **a collection of rules, principles, constraints and best practices**. It is a living, breathing document that will change based on the needs and direction of the company itself.

**Design System helps you maintain consistency and design faster. It helps to communicate with the rest of the team. It allows the team to design, develop and maintain the quality of the product.**

#### Design System Commonalities

- Style & Design Guidelines

  _Typography, colors, spacing, illustrations, etc.._

- Pattern Libraries (or component libraries)

  _Forms & form elements, images, navigation, overlays, etc.._

- Motion Guidelines

  _UI animations_

- Content Style Guides

  _Voice & tone, language, how to write, objectives, principles.._

## Web Components

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

- **Custom elements**: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
- **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
- **HTML templates**: The \<template\> and \<slot\> elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

_The Document Object Model **(DOM)** is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree._

## Flexbox

In the specification, Flexbox is described as a layout model for user interface design. **The key feature of Flexbox is the fact that items in a flex layout can grow and shrink. Space can be assigned to the items themselves, or distributed between or around the items.**

Flexbox also enables alignment of items on the main or cross axis, thus providing a high level of control over the size and alignment of a group of items.

## What is a pseudo-class?

A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.

## What is a pseudo-element?

Pseudo-elements behave in a similar way, however they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements. **In contrast to pseudo-classes, pseudo-elements can be used to style a specific part of an element.**

## Box Model

The CSS box model is **essentially a box that wraps around every HTML element**. It consists of: margins, borders, padding, and the actual content. In CSS we have two types of boxes — **block boxes** and **inline boxes**.

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent

## Specificity

Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors. Specificity only applies when the same element is targeted by multiple declarations.

## Accessibility

Accessibility in Web development means enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way.

- Visual Impairments: Screen readers
- Hearing Impairments: Captions, textual alternatives
- Mobility Impairments: Keyboard accessibiltiy, tab key to move between different controls of a web form
- Cognitive Impairments: Making everything easy to understand and clear of distractions

### ARIA

Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities. Adding ARIA roles to buttons so that a screen reader could read it as a button.

## ems and rems

em and rem are the two relative lengths you are likely to encounter most frequently when sizing anything from boxes to text.

- em unit means "my parent element's font-size"
- rem unit means "The root element's font-size"

## Asynchronous Programming

A form of computer control timing protocol in which a specific operation begins upon receipt of an indication (signal) that the preceding operation has been completed.

### Callback

A function that is passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

### Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

### Async / Await

The **async** keyword is added to functions to tell them to return a promise rather than directly returning the value

**await** can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

The await keyword causes the JavaScript runtime to pause your code on this line, not allowing further code to execute in the meantime until the async function call has returned its result — very useful if subsequent code relies on that result!

You can use await when calling any function that returns a Promise, including web API functions.

You can rewrite promise code with async/await.

## Puppeeteer and Jest

Can use them together for testing

Puppeeteer

- Catergory: Browser Automation
- Only client-side testing

Jest

- Catergory: Unit Testing
- Client-side and server-side testing
- Can use mocks

## SCSS

Variables created with $.
Can create classes with loops.
Functions to set properties bsaed on other stuff, example change font color based on background color.

- mix-in: Sets css properties and values (kind of just adds the properties/values to a css class)
- function: returns a css that

## JSX vs HTML

JSX is JavaScript XML, an extension of JavaScript that allows writing HTML in React.

The beauty of JSX is that it is actually Javascript, so you can plop your variable right in the middle of your markdown.

Custom styling syntax is a bit different and so are some attribute names.

## Stencil vs React/Angular

Stencil is not a framework, its just a compiler that turns classes with decorators into standards-based Web Components. This means that you can generate a collection of stencil components and use them in Angular, React, Vue or Polymer without any problem.

Stencil is a **compiler** developed by Ionic Developers which creates custom web components.

Stencil uses the standard technologies behind the name web components (**HTML Templates, Custom Elements and Shadow DOM**).
Contains the best features of **Angular, React, Vue and Polymer**.
Stencil compiler produces vanilla JavaScript, without any dependencies and still provides following features.

- A tiny virtual DOM layer
- Efficient one-way data binding
- Lazy Loading
- Server-side rendering

So Idea Behind Stencil is basically not focusing on the framework part like Angular or React but to create collections of components that can be used independently from a framework.

## Node

Javascript Runtime, lets you use JS have a server-side language.
