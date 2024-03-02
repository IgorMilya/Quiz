import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { Form, Formik, FormikHelpers } from 'formik'
import { Button, Input } from 'UI'
import { EmailFormTypes, GetStoredDataTypes } from 'types'
import { storedData, questions, USER_DATA } from 'utils'
import { ROUTES } from 'routes'
import { initialValues, validationSchema } from './emailPage.utils'


const EmailPage: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const handleSubmit = (value: EmailFormTypes, actions: FormikHelpers<EmailFormTypes>) => {
    const {email} = value;
    const emailData: GetStoredDataTypes = {
      storeItem: USER_DATA,
      type: 'email',
      title: `${t('emailPage.title')}`,
      answer: email,
      order: questions.length + 1

    }
    storedData(emailData)
    actions.resetForm()
    navigate(ROUTES.DOWNLOAD)
  }

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  }

  return (
    <div className="flex flex-col justify-center items-center h-full pb-[20px]">
      <div className="mb-[56px] text-center mt-[72px]">
        <h1 className="font-extrabold text-[30px] leading-[38px] mb-[12px] text-white"><Trans
          i18nKey="emailPage.title" /></h1>
        <span className="font-medium text-[15px] leading-[22px] text-[#C4C8CC]"><Trans
          i18nKey="emailPage.subtitle" /></span>
      </div>
      <Formik {...formikConfig}>
        {({ isValid, dirty }) => (
          <Form className="w-full flex flex-col justify-between h-full">
            <div>
              <Input
                type="email"
                placeholder={`${t('emailPage.placeholder')}`}
                name="email"
              />
              <div className="mt-[56px] text-center">
              <span className="text-[#B6B8C3] font-medium leading-[18px] text-[12px]"><Trans
                i18nKey="emailPage.policy" /></span>
              </div>
            </div>
            <Button variant="contained" disabled={!isValid || !dirty} type="submit">
              <Trans i18nKey="buttonText"/>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EmailPage