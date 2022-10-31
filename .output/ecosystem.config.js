module.exports = {
    apps: [
        {
            name: "golgol",
            exec_mode: "cluster",
            instances: "max",
            script: "./.output/server/index.mjs"
        }
    ]
}
