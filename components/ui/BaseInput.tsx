import React from 'react';

type BaseInputProps = {
  placeholder: string;
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  hasError?: boolean;
  error: string | undefined;
  testId?: string;
  type?: string;
};

const BaseInput = ({ placeholder, id, name, className, hasError, error="", type="text", required=true, testId }: BaseInputProps) => {
  return (
    <div className="w-full pb-2">
        <label htmlFor={id} className='capitalize text-white font-medium text-base'>{name}</label>
      <input 
        className={` text-base text-white placeholder:text-white/60 w-full px-4 py-2 my-2  border-2 border-white/30 rounded-lg transition duration-300 ease-in-out focus:outline-white/50 hover:shadow-lg hover:border-white/50 ${className}`}
        placeholder={placeholder} 
        type={type} 
        id={id}
        name={name}
        required={required}
        data-testid={testId}
      />
      {hasError && (
        <p className="text-red-500/60 text-sm mb-1">{error}</p>
      )}

      
    </div>
  );
}

export default BaseInput;
