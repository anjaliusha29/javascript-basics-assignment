const chai = require('chai');
const exp = chai.expect;
var assert = require('chai').assert;
const results = require('../solutions/q5_students_result_card.js');
 testObj = [{name:'shruthi',subjects:[{subject:'Grammer',marks:80},{subject:'Accounts',marks:89}]},
 {name:'monika',subjects:[{subject:'Grammer',marks:45},{subject:'Accounts',marks:48}]},
 {name:'sheela',subjects:[{subject:'Grammer',marks:100},{subject:'Accounts',marks:90}]},
 {name:'krishna',subjects:[{subject:'Grammer',marks:60},{subject:'Accounts',marks:79}]},
 {name:'anjali',subjects:[{subject:'Grammer',marks:28},{subject:'Accounts',marks:33}]},
 {name:'amaya',subjects:[{subject:'Grammer',marks:35},{subject:'Accounts',marks:44}]},
 {name:'akshaya',subjects:[{subject:'Grammer',marks:43},{subject:'Accounts',marks:90}]}]
  describe('Testing student result card', () => {
    
   
    it('checking the length ', (done) => {
      assert.lengthOf(testObj,7);
      assert.typeOf(testObj,'Array');
      done();
    });
    it('Has to be an array ',(done) =>  {
        exp(testObj).to.be.an('Array');
        done();
    });


  });

