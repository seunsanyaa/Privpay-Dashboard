const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const pluginAntdLess = withAntdLess({
    // modifyVars: {
    //   '@THEME--DARK': 'theme-dark',
    // },
    lessVarsFilePath: './styles/variables.less',
    // cssLoaderOptions: {
    // esModule: false,
    // sourceMap: false,
    // modules: {
    // mode: 'local',
    // localIdentName: '[hash:2]',
    // },
    // },
});

module.exports = withPlugins([[pluginAntdLess]], {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader",
                options: {

                        javascriptEnabled: true

                }
            }]
        })
        return config;
    },
    // images: {
    //   disableStaticImages: true,
    // },
    // NextFuture
    // future: {
    //   webpack5: true,
    // },
});
//
// module.exports = {
//   reactStrictMode: true,
//   images: {
//
//       domains: [
//           'res.cloudinary.com'
//       ],
//      },
//
//     // webpack: (config, options) => {
//     //     config.module.rules.push({
//     //         rules: [{
//     //             test: /\.less$/,
//     //             use: [{
//     //                 loader: 'style-loader',
//     //             }, {
//     //                 loader: 'css-loader', // translates CSS into CommonJS
//     //             }, {
//     //                 loader: 'less-loader', // compiles Less to CSS
//     //                 options: {
//     //                     lessOptions: {
//     //                         strictMath: true,
//     //                         javascriptEnabled: true,
//     //                     },
//     //                 },
//     //             }],
//     //             // ...other rules
//     //         }],
//     //
//     //     })
//     //
//     //
//     //     return config
//     // },
//
//
//
//
//
// }

