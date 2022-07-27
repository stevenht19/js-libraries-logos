import Link from './Link.js'

const Navigation = ({ url }) => {
  const isJSRoute = url === '#/js'

  return `
    <nav class='menu'>
      ${Link({ text: 'React Logo', to: '/' })}
      ${Link({ text: 'Preact Logo', to: '/preact' })}
      ${Link({ text: isJSRoute ? 'Transform to TS' : 'Just JS', to: '/js', id: 'button' })}
    </nav>
  `
}

export default Navigation