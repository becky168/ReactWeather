var React = require("react");
/**
 * Link 组件可以认为是 ReactRouter 提供的对 <a> 标签进行封装的组件，
 * 你可以查看 Link 组件渲染到 DOM 上其实就是 a 标签。它接受的 props 有 to、params 和 query。
 *
 * 此外，Link 组件还有一个小特点，
 * 就是如果这个 Link 组件指向的路由被激活的话，组件会自动添加一个值为 active 的 className，
 * 方便你对当前激活的菜单项设置不同的样式
 */
var {Link, IndexLink} = require("react-router"); // is the same as "var Link = require("react-router").link"


// 1.
// var Nav = React.createClass({
//     render: function () {
        /*
         * activeStyle = {} // JSX expression, must contain object
         * fontWeight => camel case
         */
        // return (
        //     <div>
        //         <h2>Nav Component</h2>
                // {/*<Link to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</Link>*/
                /*
                如果需要在 Get Weather 路由被渲染后才激活的指向 / 的链接，
                请使用 <IndexLink to="/">Get Weather</IndexLink>
                若用 <Link to="/">Get Weather</Link>
                則只要路徑有 "/" 的 （例如 "/about", "/examples"）均會讓 Get Weather 變成 activeClass
                *///}
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
//             </div>
//         );
//     }
// });

// 2. stateless functional component (used for presentation component)
// var Nav = (props) => {
//     return (
//         <div>
//             <h2>Nav Component</h2>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
//             <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
//             <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
//         </div>
//     );
// };

// 3. add fundation 
// (and back to React.create class component definition
// because it is no longer an presentation component, it has state)
var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault(); // prevent the page reload
        alert("Not yet wired up!");
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});


module.exports = Nav;