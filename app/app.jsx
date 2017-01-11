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
/*
Router:
    Router 是放置 Route 的容器，其本身不定義 routing ，真正 routing 規則由 Route 定義。

Route:
    Route 負責 URL 和對應的元件關係，可以有多個 Route 規則也可以有嵌套（nested）Routing。
像下面的例子就是每個頁面都會先載入 App 元件再載入對應 URL 的元件。

history:
Router 中有一個屬性 history 的規則，這邊使用我們使用 hashHistory，
使用 routing 將由 hash（#）變化決定。
例如：當使用者拜訪 http://www.github.com/，實際看到的會是 http://www.github.com/#/。
下列範例若是拜訪了 /about 則會看到 http://localhost:8008/#/about 並載入 App 元件再載入 About 元件。

    hashHistory : 會通過 hash 進行對應。好處是簡單易用，不用多餘設定。

path:
path 是對應 URL 的規則。
例如：<Route path="/repos/:name" component={Repos} />
/repos/torvalds 會對應到 /repos/:name 的位置，並將參數傳入 Repos 元件中。
由 this.props.params.name 取得參數。
順帶一提，若為查詢參數 /user?q=torvalds 則由 this.props.location.query.q 取得參數。
*/
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