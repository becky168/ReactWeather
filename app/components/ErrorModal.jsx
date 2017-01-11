var React = require("react");
// 在客户端上，虚拟 DOM 通过 ReactDOM 的 render 方法渲染到页面中，形成真实的 dom。
var ReactDOM = require("react-dom");
// 在服务端上，React 提供了另外两个方法：
// ReactDOMServer.renderToString 和 ReactDOMServer.renderToStaticMarkup 
// 将虚拟 DOM 渲染为 HTML 字符串。
var ReactDOMServer = require("react-dom/server");

var ErrorModal = React.createClass({
    // 當父元件沒有提供props的屬性時，可以採用getDefaultProps，
    // 預設props屬性的方式，讓元件使用預設的設定值，確保有props帶入。
    getDefaultProps: function () {
        return {
            title: "Error"
        };
    },
    // propTypes 使用來規範元件Props的型別與必需狀態
    propTypes: {
        title: React.PropTypes.string, // optional by default
        message: React.PropTypes.string.isRequired // required
    },
    componentDidMount: function () {
        // 當元件被寫入 DOM 之後觸發。當初始化需要操作 DOM 元素就可以用這個方法。
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );

        // take the jsx code and return the string version
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        // findDOMNode take the component as parameter
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open(); // "Fundation" make change to the DOM, 
                      // and react can't work well with the 
                      // (react need to be able to maintain the application's state)
                      // third party library that update the DOM like that
                      // so we remove the code in render and move them to componentDidMount function
    },
    render: function () {
        // var {title, message} = this.props;

        // the empty div: the minimum set of jsx required for a component to properly render
        return (
            <div></div>
        );
        // return (
        //     <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        //         <h4>{title}</h4>
        //         <p>{message}</p>
        //         <p>
        //             <button className="button hollow" data-close="">Okay</button>
        //         </p>
        //     </div>
        // );
    }
});

module.exports = ErrorModal;