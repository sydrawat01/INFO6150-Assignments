# Lecture 6 - Lab

[Siddharth Rawat](mailto:rawat.sid@northeastern.edu) - 0029631295

## Prototypes

```js
const obj1 = { a: 5, b: (x) => x * 5 };
const obj2 = Object.create(obj1);

obj2; // { ... }
obj2.b(2); // 10
obj2.toString(); // [object Object]
// Proto-typable object oriented programming
// Inheritance example in JS
obj2.__proto__; // Object {a: 5, b: b(x)}
obj2.__proto__.__proto__; // getters and setters
obj2.__proto__.__proto__.__proto__; // null

obj1.hasOwnProperty('a'); // true - has it's own property 'a'
obj2.hasOwnProperty('a'); // false - inherited from obj1

obj1.a; // 5
obj2.a; // 5
```

## DOM (Document Object Model)

> EVENT TARGET <- NODE <- DOCUMENT

### [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

- `getElementById()`
- `getElementsByClassName()`
- `getElementsByTagName()`
- `NodeList`
- `HTMLCollection`

### [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

- `childNodes()`
- `appendChild()`
- `parentElement()`
- `parentNode()`

### [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

### [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

- Keyboard events
- Mouse Events
- Network Events
- Touch
- Web socket events
- Drag and drop events
- Page load events
- Database
- Focus

### Event Bubbling

## [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
