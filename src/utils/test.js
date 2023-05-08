'use strict';

const str = '<Font>This is test String no.1</Font>';

console.log(str.match(/>.+?</).toString().substring(1))