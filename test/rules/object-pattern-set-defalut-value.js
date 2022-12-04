/**
 * @fileoverview object-pattern-set-defalut-value
 * @author Devin
 * @date 2022/12/03
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 var rule = require("../../src/rules/object-pattern-set-defalut-value"),
 
     RuleTester = require("eslint").RuleTester;
 
 
 const {testConfig} = require("../config.js");
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 var ruleTester = new RuleTester(testConfig);
 ruleTester.run("object-pattern-set-defalut-value", rule, {
 
     valid: [
         `
            const { x } = z || {};
         `
     ],
 
     invalid: [
        {
             code: `
                const { x } = z;
             `,
             errors: [{
                messageId: 'setDefalutValue'
             }]
        },
        {
          code: `
                const { x } = z || null;
          `,
          errors: [{
             messageId: 'setDefalutValue'
          }]
        },
        {
          code: `
                const { x } = z || undefined;
          `,
          errors: [{
             messageId: 'setDefalutValue'
          }]
        },
        {
          code: `
                const { x } = z || y;
          `,
          errors: [{
             messageId: 'setDefalutValue'
          }]
        }
     ]
 });
 