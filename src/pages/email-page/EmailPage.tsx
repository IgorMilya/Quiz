import { FC } from 'react'
import { Trans } from 'react-i18next'
import { Button } from 'UI'


const EmailPage: FC = () => {

  return (
    <div>
      <h1><Trans i18nKey="emailPage.title"/></h1>
      <span><Trans i18nKey="emailPage.subtitle"/></span>
      <span><Trans i18nKey="emailPage.policy"/></span>
      <Button variant="contained">Next</Button>
    </div>
  )
}

export default EmailPage