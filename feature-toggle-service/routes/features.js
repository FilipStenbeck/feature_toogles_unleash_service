const unleashInstance = require('../utils/unleash-instance');

const features = (req, res, next) => {
  const context = {
    userId: '123',
    sessionId: 'some-session-id',
    remoteAddress: '127.0.0.1',
  };

  const definitions = unleashInstance.getFeatureToggleDefinitions();

  const toggles = definitions.map(({ name }) => ({
    name,
    enabled: unleashInstance.isEnabled(name, context),
  }));

  res.send({ toggles });
};

module.exports = features;
