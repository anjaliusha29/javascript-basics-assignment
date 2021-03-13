const fruit_Array=[
    {name:'apple',color:'red',price:100},
    {name:'orange',color:'orange',price:200},
    {name:'Guava',color:'green',price:170},
    {name:'pineapple',color:'yellow',price:150},
];


const convertToObject=(fruit_Array,key)=>
fruit_Array.reduce((obj,item) => {
    obj[item[key]]=item;
    return obj;
}, {});
//const fruit_object=convertToObject(fruit_Array,'name');
//console.log(fruit_object);
//console.log(fruit_object.pineapple);
//console.log(fruit_object.Guava);


module.exports = convertToObject;