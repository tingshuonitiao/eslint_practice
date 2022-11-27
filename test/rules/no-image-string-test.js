/**
 * @fileoverview do not use image string
 * @author Devin
 * @date 2022/11/01
 */
 "use strict";
 
 var rule = require("../../src/rules/no-image-string.js"),
 
 RuleTester = require("eslint").RuleTester;
 
 const { testConfig } = require("../config.js");
 
 var ruleTester = new RuleTester(testConfig);
 ruleTester.run("no-image-string", rule, {
 
     valid: [
        {
            code: `
                const str = 'hslsmslks';
            `
        }
     ],
 
     invalid: [
        {
            code: `
                const str = 'data:image/';
            `,
            errors: [{
                messageId: 'noUseImageString'
            }]
        }
     ],
 });
 