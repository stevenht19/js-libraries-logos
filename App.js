import Router from './components/Router.js'
import Navigation from './components/Navigation.js'

const App = () => {
  let url = window.location.hash
  const root = document.getElementById('root')

  root.innerHTML = `
    ${Router({ url })}
    ${Navigation()}
  `
}

export default App