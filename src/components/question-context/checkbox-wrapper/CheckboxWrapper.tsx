import { FC, PropsWithChildren } from 'react'

interface CheckboxWrapperProps extends PropsWithChildren{

}

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({children}) => {

  return (
    <div className="flex gap-[12px] justify-center flex-col">
      {children}
    </div>
  )
}

export default CheckboxWrapper