import Router from './components/Router.js'
import Navigation from './components/Navigation.js'
import JS from './components/Javascript.js'

const root = document.getElementById('root')

export default function App() {
  let url = window.location.hash
  let boolean = false

  return {
    render: () => {
      root.innerHTML = `
        ${Router({ url, boolean })}
        ${Navigation({ url, boolean })}
      `
      App().onToggle()
    },
    
    onToggle: () => {
      const button = document.getElementById('button')
      button.addEventListener('click', () => {
        boolean = !boolean
        const js =  document.getElementById('js-id')
        const text = document.getElementById('button')
        if (!js || !text) return
  
        js.innerHTML = `${JS({ boolean: boolean, toJS: true })}`
        text.innerHTML = `${!boolean ? 'Transform to TS' : 'Go back to JS'}`
      })
    }
  }
}
