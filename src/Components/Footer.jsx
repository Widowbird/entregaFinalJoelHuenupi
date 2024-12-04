// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useValueState } from './Context/GlobalContext';

const Footer = () => {
  const {theme} = useValueState();


  return (
    <div className={theme}>
      <footer>
          <p>Powered by</p>
          <img src="./img/DH.png" alt='DH-logo' />
      </footer>
    </div>
  )
}

export default Footer
