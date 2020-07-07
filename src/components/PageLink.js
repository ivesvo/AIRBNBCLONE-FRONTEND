import React from 'react'


const PageLink = ({ disabled, handleClick, children, pageNumber, maxPageNum}) => {
    if (disabled){
        return <div onClick={handleClick} className="btn disabled">
            {children}    
        </div>
    }
    return (
        <div>
            <div className="btn" onClick={handleClick}>
            {children}
            </div>
            
        </div>
    )
};

export default PageLink