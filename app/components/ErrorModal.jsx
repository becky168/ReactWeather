var React = require("react");

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
        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;