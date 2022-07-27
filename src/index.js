import App from './App.js'
import './styles/index.css'

window.addEventListener('load', () => App().render())
window.addEventListener('hashchange', () => App().render())
