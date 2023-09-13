#!/usr/bin/env node
// console.log('hello world')
// const logs = process.argv
// logs.forEach(element => {
//   console.log(element)
// });
"use strict";

require("core-js/modules/es.string.trim.js");
const nameArg = captalize(process.argv[2] || process.env.USER || process.env.USERNAME || "world");
console.log(nameArg);
function captalize(str) {
  return str.trim().toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}