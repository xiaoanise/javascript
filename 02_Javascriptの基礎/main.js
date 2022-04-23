'use strict';

let num ='1122234412222'

let result = num.replace(/(\d)\1*/g), (content, $1) => {
  return `${content.length}${content[0]}`
}