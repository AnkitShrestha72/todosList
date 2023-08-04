import React from 'react'

const Footer = () => {
  let footerStyle = {
    backgroundColor: '#777777',   
    width: "100%",
    padding: "3rem",
  }
  
  return (
    <footer className='text-center' style={footerStyle}>
    <p>
      Copyright &copy; MytodosList.com
    </p>
    </footer>
    
  )
}

export default Footer
