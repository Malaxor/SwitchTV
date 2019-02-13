
import React from 'react';

const RenderInput = ({ input, label, meta }) => {

    return ( 
        <div className="field">
            <label>{label}</label>
            <input 
                onChange={input.onChange}
                value={input.value}
            />
        </div>
    );            
}
export default RenderInput;