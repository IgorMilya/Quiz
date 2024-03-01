import React, { FC } from 'react'
import { useField } from 'formik'
import { ErrorMessage } from 'UI'


interface InputProps {
  name: string,
  labelText?: string,
  type?: 'text' | 'password' | 'email' | 'number' ,
  placeholder?: string,
  disabled?: boolean
}

const Input: FC<InputProps> = ({ type, placeholder, name, labelText, disabled }) => {
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error
  const errorStyles = validationError ? 'border-red-700 placeholder:text-red-700' : 'border-transparent placeholder-[#C4C8CC80]'

  return (
    <label className="relative">
      {labelText && <span>{labelText}</span>}
      <input
        placeholder={placeholder}
        className={`border-2 focus:border-pink-500 ${errorStyles} text-white bg-secondary w-full py-[26px] px-[20px] rounded-[16px]`}
        type={type || 'text'}
        {...field}
        disabled={disabled} />
      <ErrorMessage meta={meta} />
    </label>
  )
}

export default Input