"use strict";
module.exports = {
    apps: [
        {
            name: "API",
            script: "index.ts",
            instances: 2,
            watch: true,
            autostart: true,
            max_memory_restrat: "16",
            env: { NODE_ENV: "development" },
            env_production: { NODE_ENV: "development" }
        },
    ],
};
//# sourceMappingURL=ecosystem.config.js.map