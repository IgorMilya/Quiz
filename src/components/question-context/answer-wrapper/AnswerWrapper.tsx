import { FC, PropsWithChildren } from 'react'
import { Button } from 'UI'
import { Trans, useTranslation } from 'react-i18next'

interface AnswerWrapperProps extends PropsWithChildren {
  isIcon: boolean,
  onClick: () => void,
  disabled: boolean
}

const AnswerWrapper: FC<AnswerWrapperProps> = ({ children, isIcon, onClick, disabled }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col justify-between h-[calc(100%_-_151px)]">
      <ul className={`flex gap-[12px] justify-center ${isIcon ? 'flex-wrap' : 'flex-col'} max-h-[79%] overflow-y-auto`}>
        {children}
      </ul>
      <Button variant="contained" onClick={onClick} disabled={disabled}>
        <Trans i18nKey="buttonText" />
      </Button>
    </div>
  )
}

export default AnswerWrapper