const chai = require('chai');
const expect = chai.expect;
const convertToObject = require('../solutions/q4_data_modelling_and_retrieval.js');

const testObj = [{name:'apple',color:'red',price:100},
{name:'orange',color:'orange',price:200},
{name:'Guava',color:'green',price:170},
{name:'pineapple',color:'yellow',price:150}];

describe('Testing - data_modelling_and_retrieval', () => {
	it('module return type test case', (done) => {
		expect(typeof convertToObject).to.deep.equal('function');
		done();
    });
    
    it('function return type test case', (done) => {
		expect(typeof convertToObject(testObj, 'name')).to.deep.equal('object');
		done();
    });
    
    it('positive test case', (done) => {
		expect(convertToObject(testObj, 'name')).to.deep.equal(
			{
				apple: { name:'apple',color:'red',price:100},
				orange: {name:'orange',color:'orange',price:200 },
                Guava: { name:'Guava',color:'green',price:170},
                pineapple:{name:'pineapple',color:'yellow',price:150}
			}
		);
		done();
    });
    
    /*it('negative test case', (done) => {
		expect(convertToObject('invalid value')).to.deep.equal(null);
		done();
	});*/
});