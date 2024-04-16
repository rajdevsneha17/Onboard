

import React, { useState } from 'react';

const Checkbox = ({ options }) => {
    const [checkedState, setCheckedState] = useState(new Array(options.length).fill(false));

    const handleCheckboxChange = (index) => {
        const newCheckedState = [...checkedState];
        newCheckedState[index] = !newCheckedState[index];
        setCheckedState(newCheckedState);
    };

    return (
        <div className="flex flex-col justify-start items-start">
            {options.map((option, index) => (
                
                <label key={option}>
                    <input
                        type="checkbox"
                        class="w-4 h-4 checked:accent-green-600"

                        
                        
                    />
                    {" "}
                    {option}
                </label>
            ))}

            
        </div>

       
    );
};

export default Checkbox;