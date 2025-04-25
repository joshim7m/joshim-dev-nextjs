import React from 'react'

type InputProps = {
  label: string;
  textarea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({ label, textarea, ...props } : InputProps) => {
  const classes = 'w-full px-7 py-4 bg-[#F4F6FF] border-none outline-none text-gray-600 text-sm'
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-lg font-semibold'>{label}</label>
      { textarea 
      ? <textarea className={`h-32 ${classes}`}  { ...props } />
      : <input className={classes}  { ...props } />

      }
    </div>
  )
}

export default Input