var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

var accounts = [
	{name: 'Aishwarya Surkar',location: 'Pune', deptID: 30, position: 'Engineer', salary:1000000, tax: 100000},
	{name: 'Ram Singh',location: 'New Delhi', deptID: 20, position: 'Sales Manager', salary:700000, tax: 70000},
	{name: 'Shweta Rane',location: 'Ahemdabad', deptID: 10, position: 'Technical Lead', salary:1200000, tax: 80000},
	{name: 'Manthan Surkar',location: 'Bangalore', deptID: 40, position: 'Project Manager', salary:1600000, tax: 750000},
	{name: 'Saurabh Dwivedi',location: 'Mumbai', deptID: 60, position: 'General Manager', salary:2500000, tax: 1400000}
];

app.get("/",function(req,resp){
	resp.send(accounts);
});


app.listen(2000);
