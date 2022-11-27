/**
 * @fileoverview jsx render cannot write style
 * @author Devin
 * @date 2022/11/01
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "jsx render cannot write style",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        return {

            JSXAttribute: node => {
                const propName = node.name && node.name.name;
                if (propName === 'style') {
                    if(node.value && node.value.expression){
                        if (node.value.expression.type === 'ObjectExpression') {
                            const arr = node.value.expression.properties
                            // 如果 style 中有表达式, 则不判断
                            for (let i = 0, len = arr.length; i < len; i++) {
                                const curr = arr[i]
                                if (curr && curr.value && curr.value.type === 'ConditionalExpression') {
                                    return
                                }
                            }
                            context.report({
                                node,
                                message: "不要使用行内样式",
                            });
                        }

                    }
                }
            }
        }

    }
};
