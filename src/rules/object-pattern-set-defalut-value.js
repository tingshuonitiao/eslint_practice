/**
 * @fileoverview object-pattern-set-defalut-value
 * @author Devin
 * @date 2022/12/03
 */
 'use strict';
 
module.exports = {
    meta: {
        docs: {
          description: 'object pattern set defalut value',
          url: 'https://www.baidu.com'
        },
        messages: {
          setDefalutValue: 'Object pattern set defalut value.'
        }
   },
 
   create(context) {

     function checkHasDefaultValue(node) {
      if (node.id.type !== 'ObjectPattern') {
        return;
      }
      const init = node.init;
      if (init.type !== 'LogicalExpression'
        || init.right.type !== 'ObjectExpression') {
        context.report({
          node,
          messageId: 'setDefalutValue'
        });
      }
     }
 
     return {
      VariableDeclarator: checkHasDefaultValue,
     };
   },
 };
 