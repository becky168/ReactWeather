/*
axios:
Promise based HTTP client for the browser and node.js

Axios 是一个基于 promise 的 HTTP 库，可以工作于浏览器中，也可以在 node.js 中使用，
提供了一个API用来处理 XMLHttpRequests 和 node 的 http 接口
可能很多人会疑问：用 jquery 的 get/post 不就很好了，为什么要用 Axios？原因主要有：

（1）Axios 支持 node.js，jquery 不支持

（2）Axios 基于 promise 语法标准，jquery 在 3.0 版本中才全面支持

（3）Axios 是一个小巧而专业的 HTTP 库，jquery 是一个大而全的库，
    如果有些场景不需要使用jquery的其他功能，只需要HTTP相关功能，这时使用 Axios 会更适合
*/
var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=4e864c9317fde9b0912dd6665fcb8a45&units=imperial";
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location); // encode the string into the uri format (EX: space => %20)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        // "return" added before axios.get will chain the promise calling ".then" twice
        // the first .then 會先解析完data之後如果是 throw Error 會 send to error handler
        // return value 則會 send to success handler
        // PS. then必須回傳一個promise
        return axios.get(requestUrl).then(function (res) {
            // debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        },
        // Original error handler
        // function (res) {
        //     throw new Error(res.data.message);
        // }
        // Update error handler
        function (err) {
            // throw new Error(err.response.data.message);
            // or use
            throw new Error("Unable to fetch weather for that location");
        }
        );
    }
};