// Cube.js configuration options: https://cube.dev/docs/config
module.exports = {
    logger: (msg, params) => {
        console.log(`${msg}: ${JSON.stringify(params)}`);
      },
};
