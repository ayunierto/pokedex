export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENZV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 10,
});
