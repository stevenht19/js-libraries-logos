const root = document.getElementById('root');

const ReactLogo = () => {
  return (`
    <div class='container'>
      <div class='react-logo'>
        <div class='logo-circle'></div>
      </div>
    </div>
  `)
};
const App = () => {
  return(`
    ${ReactLogo()}
  `)
}

window.onload = () => {
  root.innerHTML = App();
}
