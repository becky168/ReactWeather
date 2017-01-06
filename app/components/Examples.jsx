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
        <div>
            <h3>Examples</h3>
            <p>Welcome to examples page!</p>
        </div>
    );
}

module.exports = Examples;