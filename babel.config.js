module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo'],
      [ '@babel/preset-env', { targets: { esmodules: true } } ],
      [ '@babel/preset-react', { runtime: 'automatic' } ],
      '@babel/preset-typescript',
   ],
  };
};