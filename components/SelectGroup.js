import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

function SelectGroup({ selectOptionsArray }) {
    const [value, setValue] = useState(null);

    const handleSelectChange = (selectedOption, index) => {
        // Update the selected value for the specific index
        setValue({ ...value, [index]: selectedOption });
    };

    return (
        <div className='appearance-none'>
            {selectOptionsArray.map((selectOptions, index) => (
                <div key={index} className='mt-5  '>
                    <label htmlFor={`select-${index} `} className='font-bold lg:w-full w-[25rem] '>{selectOptions.label}</label>
                    <Select
                        className="w-full"
                        value={value && value[index]} 
                        onChange={(selectedOption) => handleSelectChange(selectedOption, index)}
                        placeholder={selectOptions.placeholder || 'Please select any option ...'}
                        options={selectOptions.options}
                    />
                </div>
            ))}
        </div>
    );
}

export default SelectGroup;