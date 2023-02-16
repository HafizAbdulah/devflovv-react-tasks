import React from 'react'
const Style={
    display: 'inline-block',
    margin:10,
    marginbottom:30

};

const Header=()=> {
  return (
    <div>
      <h3 style={Style}><a href='/'>Home</a></h3>
      <h3 style={Style}><a href='/Jokes'>Jokes</a></h3>

    </div>
  )
}
export default Header;