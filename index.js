#!/usr/bin/env node
console.log('hello world')
const logs = process.argv
logs.forEach(element => {
  console.log(element)
});