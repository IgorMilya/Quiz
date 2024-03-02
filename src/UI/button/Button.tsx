import { FC, PropsWithChildren, MouseEvent } from 'react'

interface ButtonProps extends PropsWithChildren {
  variant: 'contained' | 'text',
  disabled?: boolean,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  invisible?: boolean,
  type?: 'submit'  | 'button'

}

const styleOfVariant = {
  contained: 'w-full bg-primary-pinkLite pt-4 pb-4 rounded-full',
  text: '',
}


const Button: FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  disabled,
  invisible,
  type
}) => {

  const colorClasses = styleOfVariant[variant]
  const isDisabled = disabled && 'opacity-40'
  const isInvisible = invisible && 'invisible'
  return (
    <button className={`font-extrabold text-white ${colorClasses} ${isDisabled} ${isInvisible}`}
            onClick={onClick} disabled={disabled} type={type || 'button'}>
      {children}
    </button>
  )
}

export default Button