const Link = ({ 
  text, 
  id, 
  to = '#', 
}) => {
  return (`
    <a class='menu__link' href=#${to} ${id ? 'id='+id : ''}>
      ${text}
    </a> 
  `)
}

export default Link