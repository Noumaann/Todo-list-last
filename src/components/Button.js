import React  from 'react'

function Button ({type, children}){

    
    return(
    
        
                  <div className='button'>
                    <button type={type}>
                        {
                            children
                        }
                    </button>
                  </div>
        
    )
}
export default Button;