const JS = ({ boolean, toJS = false }) => {
  return (`
    <div class="${(!boolean ? 'js' : 'ts') + (!boolean && toJS ? ' toJS' : '')}">
      <span class=${!boolean ? 'js-text' : 'ts-text'}>
        ${boolean ? 'TS' : 'JS'}
      </span>
    </div>
  `)
}

export default JS