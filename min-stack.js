'use strict';

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.


/**
 * initialize your data structure here.
 */
let MinStack = function() {
  this.stack = [];
  this.minimumStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (!this.minimumStack.length || x <= this.getMin()) {
    this.minimumStack.push(x);
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let poppedNum = this.stack.pop();
  if (poppedNum === this.getMin()) {
    this.minimumStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let length = this.stack.length;
  return (this.stack[length - 1] !== null) ? this.stack[length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minimumStack[this.minimumStack.length - 1];
};

let obj = new MinStack();
obj.push(4);
obj.push(7);
obj.push(12);
obj.pop()
obj.top()
obj.getMin()

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */