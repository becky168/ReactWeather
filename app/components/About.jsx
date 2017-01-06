var React = require("react");

// When you have a simple presentation component, (doesn't manage any state)
// that only have a simple render function,
// you can use the stateless functional component instead.
// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// stateless functional component
// var About = function (props) {
//     return (
//         <h3>About Component</h3>
//     );
// }

// arrow function
var About = (props) => {
    return (
        <h3>About Component</h3>
    );
}

module.exports = About;