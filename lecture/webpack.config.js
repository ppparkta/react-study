const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve:{
        extensions:['.js','.jsx']
    },//파일 확장자 입력해두면 웹팩이 알아서 해당 확장자 파일 엔트리 app이름 뒤에 붙여넣음

    entry: {
        app:['./client',],
    },//입력

    module:{
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
            },
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'), //node문법임 지금은 그냥 외우기  C:\users\zerocho\webstorm\react-webgame\lecture\dist
        filename: 'app.js',
    },//출력
};