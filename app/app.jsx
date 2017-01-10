var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
// is the same as:
// var Route = require("react-router").Route; ...
//
// hashHistory
// React Router 是建立在 history 之上的。 
// 简而言之，一个 history 知道如何去监听浏览器地址栏的变化， 
// 并解析这个 URL 转化为 location 对象， 
// 然后 router 使用它匹配到路由，最后正确地渲染对应的组件。
// (用 #/路徑 當成 path)
//
// IndexRoute
// 即指定默认情况下加载的子组件。
// 你可以把IndexRoute想象成某个路径的index.html。
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

// require the css that the component need only inside the component
// Load fundation
// css!: css loader
//       load css file 
//       (by default, require doesn't know how to load css file)
// style!: style loader
//       inject css to the html file, so the style actually show up
require("style!css!foundation-sites/dist/foundation.min.css");
// fire up the foundation.
$(document).foundation();

// App css
// specify the module we want to load
// node-sass: turn sass into css file
// sass-loader: read the sass/scss file
require("style!css!sass!applicationStyles");

// path: "/" => Render IndexRoute (component = weather)
// path: "/about" => Render component = about
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById("app")
);