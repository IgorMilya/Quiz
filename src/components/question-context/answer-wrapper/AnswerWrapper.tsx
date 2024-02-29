import { FC, PropsWithChildren } from 'react'
import { Button } from 'UI'

interface AnswerWrapperProps extends PropsWithChildren{
  isIcon: boolean,
  onClick: () => void,
  disabled: boolean
}

const AnswerWrapper: FC<AnswerWrapperProps> = ({children, isIcon, onClick, disabled}) => {

  return (
    <div className="flex flex-col justify-between h-[calc(100%_-_151px)]">
      <ul className={`flex gap-[12px] justify-center ${isIcon ? 'flex-wrap' : 'flex-col'}`}>
        {children}
      </ul>
      <Button variant="contained" onClick={onClick}
              disabled={disabled}>Next</Button>
    </div>
  )
}

export default AnswerWrapper