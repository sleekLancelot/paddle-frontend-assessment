import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
    return (
        <div>
            <img 
                alt='loading' 
                src={spinner} 
                style={{
                    width: '150px', 
                    margin: 'auto', 
                    display: 'block',
                    color: 'black',
                    backgroundColor: 'inherit'
                }}
            />
        </div>
    )
}

export {Spinner};