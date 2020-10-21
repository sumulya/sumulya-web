// require('ignore-styles')

// require('@babel/register')({
//     ignore: [/(node_module)/],
//     presets: ['@babel/preset-env', '@babel/preset-react']
// })

// require('./server')

require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server');