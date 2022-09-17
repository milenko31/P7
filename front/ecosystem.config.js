module.exports = {
    apps: [
        {
            name: 'GroupoMania',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
