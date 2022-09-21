# assignment-5-base

Base repo for assignment 5

## [Siddharth Rawat](mailto:rawat.sid@nnortheastern.edu) - 002963295

## DOM Tree

Here is the DOM Tree that will be checked for the assignment:

```html
  <body id="content">
    <div id="div-1" class="mainContainer">
      <span id="span-1" class="note"></span>
      <span id="span-2"></span>
      <div id="div-2" class="subContainer1">
        <p id="para-1" class="sub1-p1 note"></p>
        <span id="span-3" class="sub1-span3"></span>
      </div>
      <div id="div-3" class="subContainer2">
        <section id="sec-1">
          <label id="lbl-1"></label>
        </section>
      </div>
      <div id="div-4">
        <span id="span-4" class="mania"></span>
        <span id="span-5" class="note mania"></span>
      </div>
    </div>
    <span id="span-6" class="randomSpan"></span>
  </body>
```

## Testcases

Here are the test cases that will be considered for the assignment:

```js
// Testing
console.log("Started...");
// Test case 1 -
console.log(divNode1.search("span"));
// Test case 2 -
console.log(divNode1.search(".note"));
// Test case 3 -
console.log(divNode1.search("label"));
// Test case 4 -
console.log(p1.search(".note"));
// Test case 5 -
console.log(divNode1.search("div"));
// Test case 6 -
console.log(randomNode.search("div"));
// Test case 7 -
console.log(divNode2.search("section"));
// Test case 8 -
console.log(body.search());
// Error conditions need to be handled
// invalid input need to be handled
// Test case 9 -
console.log(body.search("section"));
// Test case 10 -
console.log(divNode1.search(".randomSpan"));
// randomSpan is some Span outside your divNode1 closed
```

> Note: **divNode1, p1, randomNode, divNode2, body are the Node variable names you create when you instantiate the nodes for the DOM Tree.**

## Running the program

Use the following command to execute the JavaScript file in the terminal:

```shell
npm run start
```
