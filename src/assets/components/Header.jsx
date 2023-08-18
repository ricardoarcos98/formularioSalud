import React from 'react';
import Logo from '../images/LOGO.png';

const Header = () => {
  return (
    <div className='flex items-center justify-center p-2'>
      <div className='flex items-center justify-between w-full max-w-4xl'>
        <div className='text-left'>
          <h1 className='text-xl font-bold mb-1'>PIJAOS SALUD EPS INDIGENA</h1>
          <h2 className='text-md mb-1 text-center'>Oficina Puerto Gaitán</h2>
          <p className='text-xs text-center'>Resolución 013 De la dirección general</p>
          <p className='text-xs text-center'>De asuntos indígenas del Ministerio Del Interior</p>
          <h1 className='font-bold text-center'>Verificado Usuarios PIJAOS SALUD</h1>
        </div>
        <div className='ml-11'>
          <img src={Logo} alt='Logo' className='w-20 h-20 ' /> 
        </div>
      </div>
    </div>
  );
}

export default Header;


