var React = require("react");
var Nav = require("Nav");

// var Main = React.createClass({
//     render: function () {
//         // PS. <Nav/> : if no parameter, use "/"
//         // this.props.children : 它表示组件的所有子节点
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

// stateless functional component
// var Main = (props) => {
//     /*props become arguments when use stateless functional component*/
//     return (
//         <div>
//             <Nav/>
//             <h2>Main Component</h2>
//             {props.children}
//         </div>
//     );
// };

// add fundation
var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;