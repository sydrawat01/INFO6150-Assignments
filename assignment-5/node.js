/**
 * A Node represents an HTML Element. A node can have a tag name,
 * a list of CSS classes and a list of children nodes.
 */
class Node {
  constructor(tag, children, classes, id) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of child nodes.
    this.children = children; // All children are of type Node
    // Unique ID for each node.
    this.id = id;
  }

  /**
   * Returns descendent nodes matching the selector. Selector can be
   * a tag name or a CSS class name.
   *
   * For example:
   *
   * 1.
   * <div>
   *   <span id="span-1"></span>
   *   <span id="span-2"></span>
   *   <div>
   *     <span id="span-3"></span>
   *   </div>
   * </div>
   * Selector `span` should return 3 span nodes in this order
   * span-1 -> span-2 -> span-3.
   *
   * 2.
   * <div>
   *   <span id="span-1" class="note"></span>
   *   <span id="span-2"></span>
   *   <div>
   *     <span id="span-3"></span>
   *   </div>
   * </div>
   * Selector `.note` should return one span node with `note` class.
   *
   * 3.
   * <div>
   *   <span id="span-1"></span>
   *   <span id="span-2"></span>
   *   <article>
   *     <div>
   *       <span id="span-3"></span>
   *     </div>
   *   </article>
   * </div>
   * Selector `div span` should return three span nodes in this order
   * span-1 -> span-2 -> span-3.
   *
   * @param {string} the selector string.
   * @returns {Array} Array of descendent nodes.
   * @public
   */

  // Recursive function to search the selector in the DOM Tree
  DOMTree = (selector, parent, result) => {
    //get the current tree depth from the selector
    let tree = parent.children;
    let treeDepth = tree.length;
    //get the selector values and split by spaces to store it in ann array
    let selectorArr = selector.split(' ');
    //if there is only one selector left - BASE CONDITION
    if (selectorArr.length === 1) {
      for (let i in tree) {
        if (
          selector === tree[i].tag ||
          tree[i].classes.includes(selector.slice(1, selector.length))
        ) {
          result.push(tree[i].id);
        }
        if (treeDepth) {
          result = this.DOMTree(selector, tree[i], result);
        }
      }
    } else {
      let firstParent = selectorArr[0];
      let firstChild = selectorArr[1];

      for (let i = 0; i < treeDepth; i++) {
        if (firstParent === tree[i].tag) {
          if (tree[i].children.length) {
            /* RECURSIVELY call the same function to iterate through the parent tree.
             * Iterate recursively with the immediate child
             */
            result = this.DOMTree(firstChild, tree[i], result);
          }
        }
      }
    }
    return result;
  };

  search(selector) {
    /* Using try-catch to avoid null selectors and to check if
     * the selector input is of type string
     * Also checks if the tree is empty or not.
     */
    try {
      // If the tree is not empty
      if (this.DOMTree(selector, this, []).length != 0) {
        return this.DOMTree(selector, this, []);
      } else {
        return [];
      }
    } catch {
      // If the selector is a null value
      if (selector == null) {
        return [];
      }
      // If the selector is not of type String
      if (typeof selector != String) {
        return [];
      }
    }
  }
}

// DOM Tree Nodes
const random = new Node('span', [], ['randomSpan'], 'span-6');
const span5 = new Node('span', [], ['note', 'mania'], 'span-5');
const span4 = new Node('span', [], ['mania'], 'span-4');
const div4 = new Node('div', [span4, span5], [], 'div-4');
const label1 = new Node('label', [], [], 'lbl-1');
const sec1 = new Node('section', [label1], [], 'sec-1');
const div3 = new Node('div', [sec1], ['subContainer2'], 'div-3');
const span3 = new Node('span', [], ['sub1-span3'], 'span-3');
const p1 = new Node('p', [], ['sub-p1', 'note'], 'para-1');
const div2 = new Node('div', [p1, span3], ['subContainer1'], 'div-2');
const span2 = new Node('span', [], [], 'span-2');
const span1 = new Node('span', [], ['note'], 'span-1');
const div1 = new Node(
  'div',
  [span1, span2, div2, div3, div4],
  ['mainContainer'],
  'div-1'
);
const body = new Node('body', [div1, random], [], 'content');

// TEST CASES
console.log('Started...');
// Test case 1 -
console.log(div1.search('span'));
// Test case 2 -
console.log(div1.search('.note'));
// Test case 3 -
console.log(div1.search('label'));
// Test case 4 -
console.log(p1.search('.note'));
// Test case 5 -
console.log(div1.search('div'));
// Test case 6 -
console.log(random.search('div'));
// Test case 7 -
console.log(div2.search('section'));
// Test case 8 -
console.log(body.search());
// Error conditions need to be handled
// invalid input need to be handled
// Test case 9 -
console.log(body.search('section'));
// Test case 10 -
console.log(body.search('div span'));
