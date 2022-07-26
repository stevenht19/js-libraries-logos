import React from './React.js'
import Preact from './Preact.js'
import NotFound from './NotFound.js'

const Router = ({ url }) => {
  const parsedUrl = url
    .includes('#') ? url.slice(2) : url
 
  switch(parsedUrl) {
    case '': 
      return `${React()}`
    case 'preact': 
      return `${Preact()}` 
    default: 
      return `${NotFound()}`
  }
}

export default Router