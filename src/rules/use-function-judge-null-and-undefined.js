/**
 * @fileoverview use function to judge null and undefined
 * @author Devin
 * @date 2022/12/03
 */
 'use strict';

const TARGET_OPERATOR = ['==', '===', '!=', '!=='];
 
module.exports = {
    meta: {
        docs: {
          description: 'use function to judge null and undefined',
          url: 'https://www.baidu.com'
        },
        messages: {
          useFunction: 'Use function to judge null and undefined.'
        }
   },
 
   create(context) {

     function checkJudgeNullAndUndefined(node) {
      const right = node.right;
      const rightIsNull = right.type === 'Literal' && right.value === null;
      const rightIsUndefined = right.type === 'Identifier' && right.name === 'undefined';
      if (TARGET_OPERATOR.indexOf(node.operator) !== -1
        && (rightIsNull || rightIsUndefined)) {
          context.report({
            node,
            messageId: 'useFunction'
          });
        }
     }
 
     return {
       BinaryExpression: checkJudgeNullAndUndefined
     };
   },
 };
 