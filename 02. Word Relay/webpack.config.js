const path = require('path');

module.exports ={
    name : 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js','.jsx']
    },      
    entry:{
        app:['./client'], //클라이언트에서 wordrelay.jsx를 불러오기에 넣어줄 필요 없음
    }, //입력

    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 1% in KR'],
                        },
                        debug:true,
                    }],
                        '@babel/preset-react',
                    ],
                plugins:['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    output:{
        path: path.join(__dirname  /*현재폴더*/, 'dist'),
        filename:'app.js'
    }, //출력
};