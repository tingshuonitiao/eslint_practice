/**
 * @fileoverview do not use image string
 * @author Devin
 * @date 2022/11/01
 */
 'use strict';
 
module.exports = {
    meta: {
        docs: {
          description: 'do not use image string',
          url: 'https://www.baidu.com'
        },
        messages: {
            noUseImageString: 'Do not use image string, try to upload image to CDN.'
        }
   },
 
   create(context) {

     function checkString(node) {
       const value = node.value;
       if (typeof value === "string" && value.startsWith('data:image/')) {
        context.report({
          node,
          messageId: 'noUseImageString'
        });
       }
     }
 
     return {
       Literal: checkString,
     };
   },
 };
 