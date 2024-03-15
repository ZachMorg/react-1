### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
**React is a JavaScript library that allows for much more streamlined HTML development**

- What is Babel?
**Babel converts JSX code into JavaScript**

- What is JSX?
**JSX is a type of JavaScript syntax that allows for writing HTML in JavaScript**

- How is a Component created in React?
**The component's functions and HTML are created in a file and then exported to another file to be used there**

- What are some difference between state and props?
**props are given to the component from another component while states are completely internal**

- What does "downward data flow" refer to in React?
**It means that only the parent can send data to it's child, and not vice-versa**

- What is a controlled component?
**It is a component that directly changes its HTML instead of relying on the DOM**

- What is an uncontrolled component?
**It is a component that relys on the DOM to change its HTML**

- What is the purpose of the `key` prop when rendering a list of components?
**Keys determine the identity of elements in lists, so you need to include them for any list in react**

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
**Keys should always stay the same, so when the list changes, the indexes and keys of the elements will also change**

- Describe useEffect.  What use cases is it used for in React components?
**It is a hook that allows for sychronization with an external system. They are mostly used for syncing with local storage**

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
**It allows the developer to store a variable without rendering it. It does not rerender the component nor does it change during rerenders**

- When would you use a ref? When wouldn't you use one?
**refs are used for when you need a state that doesn't rerender when changed**

- What is a custom hook in React? When would you want to write one?
**custom hooks are functions that can be imported to different components that use the same logic. When multiple components use the same logic, then custom hooks are a good solution**
