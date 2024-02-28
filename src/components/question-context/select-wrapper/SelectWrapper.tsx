import { FC, PropsWithChildren } from 'react'

interface SelectWrapperProps extends PropsWithChildren {
  isIcon: boolean
}

const SelectWrapper: FC<SelectWrapperProps> = ({ children, isIcon }) => {

  return (
    <ul className={`flex gap-[12px] justify-center ${isIcon ? 'flex-wrap' : 'flex-col'}`}>
      {children}
    </ul>
  )
}

export default SelectWrapper