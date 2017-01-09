var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function () {
//         var {temp, location} = this.props;

//         return (
//             <h3>It is {temp} in {location}.</h3>
//         );
//     }
// });

// stateless functional component
// var WeatherMessage = (props) => {
//     var {temp, location} = props;

//     return (
//         <h3>It is {temp} in {location}.</h3>
//     );
// };

// 進階版本 stateless functional component
// var WeatherMessage = ({temp, location}) => {
//     return (
//         <h3>It is {temp} in {location}.</h3>
//     );
// };

// add fundation
var WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">It is {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;