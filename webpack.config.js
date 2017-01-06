module.exports = {
    entry: "./app/app.jsx", // tell webpack where to start our code
                               // by default, webpack 不認識 jsx, 所以要用 babel-loader
    output: {
        path: __dirname, // __dirname: the path to the current folder
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname, // root必須是絕對路徑, 是通过绝对路径的方式来定义查找模块的文件夹
                         // resolve.root only spcifies the resolving for modules
        alias: {
            Main: "app/components/Main.jsx",
            Nav: "app/components/Nav.jsx",
            Weather: "app/components/Weather.jsx",
            WeatherForm: "app/components/WeatherForm.jsx",
            WeatherMessage: "app/components/WeatherMessage.jsx",
            About: "app/components/About.jsx",
            Examples: "app/components/Examples.jsx",
            openWeatherMap: "app/api/openWeatherMap.jsx"
        },
        // 如果希望在 require() 時不需要加入副檔名
        // 可以加入一個 resolve.extensions 屬性並告訴 webpack 哪些副檔名是可以省略的。
        // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
        extensions: ["", ".js", ".jsx"] // 当requrie的模块找不到时，添加这些后缀 ("" or .js or .jsx)
    },
    module: {
        // loaders 指定要載入的loader，loaders 可以像 querystring 一樣接收參數。
        loaders: [
            {
                // tell babel-loader to take our file parse through react, 
                // get the output and run them through es2015
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"] // presets is built in to babel
                                                 // it knows what to do with this array
                },
                // 設定哪些檔案會被babel-loader parse through (就是 .js & .jsx 檔案)
                // use regular expression
                test: /\.jsx?$/,
                // 設定哪些資料夾不被 babel-loader parse
                // (node_modules & bower_components 資料夾)
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // This will auto create a source map that browser understand for us to debug
    // use source map, we will debug in the raw file(原始的file)
    // and run in the compiled file(bundle.js)
    devtool: "cheap-module-eval-source-map"
};