import { FC, PropsWithChildren } from 'react'

interface AnswerActionWrapperProps extends PropsWithChildren{}

const AnswerActionWrapper: FC<AnswerActionWrapperProps> = ({children}) => {

  return (
    <div className="flex flex-col justify-between h-[calc(100%_-_151px)]">
      {children}
    </div>
  )
}

export default AnswerActionWrapper