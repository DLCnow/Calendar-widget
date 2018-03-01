const path = require('path');

module.exports = {
        entry: "./app/main", //入口
        output: {
            path: path.resolve(__dirname, "dist"), //路径
            filename: "all.js" //文件名
        },
        module: {
            rules: [
                {   
                    //检测以什么拓展名结尾
                    test: /\.jsx?$/,
                    //包含什么文件夹
                    include: [
                        path.resolve(__dirname, "app")
                    ],
                    //不包含什么文件夹
                    exclude: [
                        path.resolve(__dirname, "app/node_modules")
                    ],
                    loader: "babel-loader",
                    options: {
                        presets: ["env","react"],
                        plugins: ["transform-object-rest-spread"]
                    }
                }
            ]
        },
        watch: true
}