const { v4 } = require('uuid');
const { initialize } = require('unleash-client');

const instance = initialize({
  url: 'http://localhost:4242/api/',
  appName: 'unleash-client',
  instanceId: v4(),
  refreshInterval: 1000,
  metricsInterval: 1000,
});

// optional events
instance.on('error', console.error);
instance.on('warn', console.warn);
instance.on('ready', console.log);

// metrics hooks
instance.on('registered', (clientData) =>
  console.log('unleach ready!', clientData),
);
instance.on('sent', (payload) =>
  console.log('metrics bucket/payload sent', payload),
);
instance.on('count', (name, enabled) =>
  console.log(`isEnabled(${name}) returned ${enabled}`),
);

instance.on('changed', (data) => console.log({ data }));

module.exports = instance;
