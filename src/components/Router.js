import React from './React.js'
import Preact from './Preact.js'
import NotFound from './NotFound.js'
import JS from './Javascript.js'

const Router = ({ url, boolean }) => {
  const baseUrl = url.includes('#') ? url.slice(2) : url
 
  switch(baseUrl) {
    case '': 
      return `${React()}`
    case 'preact': 
      return `${Preact()}` 
    case 'js':
      return `<div id='js-id'>${JS({ boolean })}</div>`
    default: 
      return `${NotFound()}`
  }
}

export default Router