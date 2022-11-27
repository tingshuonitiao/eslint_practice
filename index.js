
module.exports = {
    rules:{
         'no-inner-style': require('./src/rules/no-inner-style.js'),
         'no-image-string': require('./src/rules/no-image-string.js'),
    },
    configs:{
        recommended: {
          plugins: ['@local-life/eslint-plugin'],
          rules: {
            '@local-life/no-inner-style': 0,
            '@local-life/no-image-string': 2
          },
        }
    }
}