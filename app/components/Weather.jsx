var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var ErrorModal = require("ErrorModal");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    getInitialState: function () {
        // return {
        //     location: "Miami",
        //     temp: 88
        // };
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
            // alert(errorMessage);
        });
    },
    // fired once the component has been successfully mounted into browser
    componentDidMount: function () {
        // URL的查询字符串/foo?bar=baz，可以用this.props.location.query.bar获取
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            // if there has location and the location's value is more than an empty string
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    // 已掛載的元件收到新的 props 時被觸發。
    // 在這個方法裡你通常會去比較 this.props 和 nextProps 然後再用 this.setState 去改變狀態。
    componentWillReceiveProps: function (newProps) {
        // props: somthing that component can't change.
        //        but a parent can always update a child's props.
        // state: somthing that component can change.
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            // if there has location and the location's value is more than an empty string
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 clssName="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError () {
            if (typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }
        // return (
        //     <div>
        //         <h3>Weather Component</h3>
        //         <WeatherForm onSearch={this.handleSearch}/>
        //         <WeatherMessage temp={temp} location={location}/>
        //     </div>
        // );

        // return (
        //     <div>
        //         <h3>Weather Component</h3>
        //         <WeatherForm onSearch={this.handleSearch}/>
        //         {renderMessage()}
        //     </div>
        // );

        // add fundation
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;