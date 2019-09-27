const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const PATH = {
    app:path.join(__dirname,"../src/main.js"),
    build:path.join(__dirname,"../dist")
}


module.exports = {
    entry:{
        app:PATH.app
    },
    output:{
        filename:"[name].js",
        path:PATH.build
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
        new VueLoaderPlugin()
    ],
    module:{
        //打包的一种规则
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/env"]
                    }
                },
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"],
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:/\.(jpg|gif|png|svg)$/,
                exclude:path.join(__dirname,"../node_modules"),
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048,
                        //定义图片路径及图片名称
                        name: path.posix.join('public', 'img/[name].[ext]'),
                    }

                    /*
                        在打包图片的时候如果图片的大小小于2048的通过url-loader进行打包
                        如果大于2048的时候webpack会自动通file-loader进行打包

                        url-loader打包的时候会将文件打包成base64的形式
                    */
                }
            },
            {
               
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:"url-loader",
                exclude:path.join(__dirname,"../node_modules")
            }
        ]
    },
    devServer:{
        open:true,
        port:9000,
    },
    resolve:{
        //默认优先引入的文件
        extensions:[".vue",".js",".json"],
        alias:{
            "@":path.join(__dirname,"../src")
        }
    }
}



