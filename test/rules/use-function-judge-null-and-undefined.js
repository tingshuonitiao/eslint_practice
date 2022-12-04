/**
 * @fileoverview use function to judge null and undefined
 * @author Devin
 * @date 2022/12/03
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 var rule = require("../../src/rules/use-function-judge-null-and-undefined"),
 
     RuleTester = require("eslint").RuleTester;
 
 
 const {testConfig} = require("../config.js");
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 var ruleTester = new RuleTester(testConfig);
 ruleTester.run("use-function-judge-null-and-undefined", rule, {
 
     valid: [
         `
            if (isNullOrUndefined(x)) {

            }
         `,
 
         `
            if (isNotNullAndUndefined(x)) {

            }
         `
     ],
 
     invalid: [
        {
             code: `
                if (x == null) {
  
                }
             `,
             errors: [{
                messageId: 'useFunction'
             }]
        },
        {
             code: `
                if (x === null) {
  
                }
             `,
             errors: [{
                messageId: 'useFunction'
             }]
        },
        {
            code: `
                if (x != null) {
  
                }
            `,
            errors: [{
               messageId: 'useFunction'
            }]
        },
        {
            code: `
               if (x !== null) {
 
               }
            `,
            errors: [{
               messageId: 'useFunction'
            }]
        },
        {
            code: `
               if (x == undefined) {
 
               }
            `,
            errors: [{
               messageId: 'useFunction'
            }]
        },
        {
            code: `
               if (x === undefined) {
 
               }
            `,
            errors: [{
               messageId: 'useFunction'
            }]
        },
        {
           code: `
               if (x != undefined) {
 
               }
           `,
           errors: [{
              messageId: 'useFunction'
           }]
        },
        {
           code: `
                if (x !== undefined) {

                }
           `,
           errors: [{
              messageId: 'useFunction'
           }]
        },
    
     ]
 });
 