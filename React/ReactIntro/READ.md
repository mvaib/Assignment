what is React?
=> React is a framework that employes Webpack to automatically compile React, JSX, and ES6 code while handling CSS files prefixes. React is a JavaScript-based UI development library. Although React is a library Rather than a language, it is widely used in web development.

Who made React?
=> React was created by Jordan Walke, a software engineer at Meta, Who released an early prototype of React called "FaxJS". He was influenced by HXP, an HTML component library for PHP. It was first deployed on facebook's News Feed in 2011 and later on instagram in 2012.

What is Babel?
=> Babel is a JavaScript complier that can translate markup or propramming language into javaScript. With Babel, you can use the newest feature of JavaScript(ES6-ECMAScript 2015). Babel is avaliable for different conversions. React uses Babel to convert JSX into JAVASCRIPT.

How does Babel convert html code in React into Valid code ?
=> Babel takes the JSX code and convert it into JavaScript functions that return the same HTML-Like structures, making it possible to use JSX in React applications and ensuring compatibility with older browsers that may not support the latest JavaScript syntax.

What is ReactDOM used for? Write an example?
=> ReactDOM is a package in React that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the various methods to manipulate DOM.

example:-> element = React.createElement("p",{className : "quote", children:"Vaibhav"})

//catch the created tag in html using reactDOM
 Root = ReactDOM.createRoot(document.getELementById("root"))

 Root.render(element)
 //now it will display in web 

What are the packages that you need to import for react to work with?
=> for Development this packages are used:
   <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

and for Production this Packages are used:
   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

How do you add react to a web application?
=> step 1: Add a DOM Container to the HTML:
   <div id="like_button_container"></div>

step 2: Add the script Tags:
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

step 3 : Create a React Component:
     <script src="like_button.js">
        const domContainer = document.querySelector('#like_button_container');
        const root = ReactDOM.createRoot(domContainer);
        root.render(e(LikeButton));
     </script>

and That's it React will be added to webApplication.

What is React.createElement?
=> React.createElement lets you create a React elements as like we use to create a elements in javaScript DOM. It serves as an alternative to writing JSX.


What are the three properties that createElement accept?
=> createElement() function takes three arguments: type, props(properties), and children.

What is the meaning of render and root ?
=> 1.) React renders HTML to the webpage by using function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.

2.) In React, the root element refers to the top-level element that is the parent of all other components in your application. It is typically represented as a DOM node within trhe public/index.html file that serves as the entry point for your React app.
