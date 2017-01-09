var React = require("react");
var {Link} = require("react-router");

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h2>Exampler component</h2>
//         );
//     }
// });

// var Examples = (props) => {
//     return (
//         <div>
//             <h3>Examples</h3>
//             <p>Welcome to examples page!</p>
//         </div>
//     );
// }

// add fundation
var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;