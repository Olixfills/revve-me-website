import React from 'react';

type BaseTextAreaProps = {
  placeholder: string;
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  hasError?: boolean;
  error: string | undefined;
  testId?: string;
};

const BaseTextArea = ({ placeholder, id, name, className, hasError, error="", required=true, testId }: BaseTextAreaProps) => {
  return (
    <div className="w-full pb-4">
        <label htmlFor={id} className='capitalize text-white font-medium text-base'>{name}</label>
      <textarea 
        className={` text-base h-32 text-white placeholder:text-white/60 w-full px-4 py-2 my-2  border-2 border-white/30 rounded-lg transition duration-300 ease-in-out focus:outline-white/50 hover:shadow-lg hover:border-white/50 ${className}`}
        placeholder={placeholder} 
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

export default BaseTextArea;
