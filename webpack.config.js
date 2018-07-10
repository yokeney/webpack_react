const path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output:{
    path:path.resolve(__dirname,'./build'),//打包文件的输出路径两个下环线
    filename:'bundle.js',//打包文件名
  },
  module: {
        rules: [{ //配置加载器
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                use: [{
                    loader:'babel-loader', //使用的加载器名称
                    query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react']
                  }
                }]
              }]
    },
  plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html"
        })
    ]
}
