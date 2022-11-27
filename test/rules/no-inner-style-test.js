/**
 * @fileoverview jsx render cannot write style
 * @author Devin
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 var rule = require("../../src/rules/no-inner-style"),
 
     RuleTester = require("eslint").RuleTester;
 
 
 const {testConfig} = require("../config.js");
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 var ruleTester = new RuleTester(testConfig);
 ruleTester.run("no-inner-style", rule, {
 
     valid: [
         `
         class TestView extends Component {
             render() {
                 const mode = 'dark';
                 return (
                     <View style={{flex: 1, width: 200, color: mode === 'dark' ? '#000' : '#fff'}}>
                     </View>
                 )
             }
         }
         `,
 
         `
         function TestView(){
             const mode = 'dark';
             return (
                 <View style={{flex: 1, width: 200, color: mode === 'dark' ? '#000' : '#fff'}}>
                 </View>
             )
         }
         `
     ],
 
     invalid: [
         {
             code: `
             class TestView extends Component{
                 render() {
                     const mode = 'dark';
                     return (
                         <View style={{flex:1, width: 200}} >
                         </View>
                     )
                 }
             }
             `,
             errors: [{
                 message: "不要使用行内样式",
             }]
         },
         {
             code: `
                 function TestView(){
                     return (
                         <View style={{flex:1, width: 200}} >
                         </View>
                     )
                 }
             `,
             errors: [{
                 message: "不要使用行内样式",
             }]
         }
     ]
 });
 