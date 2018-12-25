'use strict';

var Table = require("tty-table");
var header = [
  {
    alias: "Ingredient",
    value: "name",
    // headerColor: "white",
    color: "green",
    // align: "left"
    // paddingRight: 5,
  },
  {
    alias: "Needs cooling",
    value: "needsCooling",
    // headerColor: "white",
    color: "blue", 
    // align: "left",
    width: 15,
    formatter: function (value) {
      value = value == true ? 'Yes' : 'No';
      return value;
    }
  },
  {
    alias: "In stock",
    value: "inStock",
    // headerColor: "white",
    // align: "left",
    width: 10,
    formatter: function (value) {
      value = value > 0 ? value : '-';
      return value;
    }
  }
];

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

// var footer = [
//   "TOTAL",
//   (function(){
//     return rows.reduce(function(prev,curr){
//       return prev + (curr[1] as any);
//     },0)
//   }()),
//   (function(){
//     var total = rows.reduce(function(prev,curr){
//       return prev+((curr[2]==='yes') ? 1: 0);
//     },0);
//     return (total/rows.length*100).toFixed(2) + "%";
//   }())];

var t1 = Table(header,ingredients, {
  borderStyle: 2,
  paddingBottom: 0,
  headerAlign: "center",
  headerColor: "white",
  align: "left",
  color: "white"
});

let str1 = t1.render();

console.log(str1)