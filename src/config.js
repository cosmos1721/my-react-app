// Import the configuration.
const config = require('./config.json');
// Get the NODE_ENV environment variable. If it's not set, default to 'dev'.

const nodeEnv = config.REACT_ENV || 'prod1';
console.log(nodeEnv)
// Select the appropriate configuration based on the NODE_ENV value.
const selectedConfig = config[nodeEnv];
console.log(selectedConfig)
// Export the selected configuration object.
module.exports = {selectedConfig};

