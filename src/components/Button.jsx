import React from 'react'

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <div>
        <button className={`flex justify-center items-center gap-2 py-4 px-7 border font-montserrat text-lg leading-none 
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"} ${fullWidth && 'rounded-full w-full'}"}`}
        >{label}
            
            {iconURL && <img src={iconURL}  alt="arrow right icon" className='mi-2 rounded-full w-5 h-5' /> }
        </button>
    </div>
  )
}

export default Button