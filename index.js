
module.exports = {
    rules:{
         'no-inner-style': require('./src/rules/no-inner-style.js'),
         'no-image-string': require('./src/rules/no-image-string.js'),
         'use-function-judge-null-and-undefined': require('./src/rules/use-function-judge-null-and-undefined'),
         'object-pattern-set-defalut-value': require('./src/rules/object-pattern-set-defalut-value'),
    },
    configs:{
        recommended: {
          plugins: ['@tingshuonitiao/eslint-plugin'],
          rules: {
            '@tingshuonitiao/no-inner-style': 0,
            '@tingshuonitiao/no-image-string': 2,
            '@tingshuonitiao/use-function-judge-null-and-undefined': 0,
            '@tingshuonitiao/object-pattern-set-defalut-value': 0,
          },
        }
    }
}