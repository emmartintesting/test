var React = require('react');

var HelloWorld = function(){
  return <span>Hello World</span>;
};
HelloWorld.displayName = 'Hello World';

console.log(React.renderToString(<HelloWorld />));
