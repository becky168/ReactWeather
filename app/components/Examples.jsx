var React = require("react");

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h2>Exampler component</h2>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <h2>Exampler component!</h2>
        <p>Welcome to examples page!</p>
    );
}

module.exports = Examples;