import { Navigate, Route, Routes } from 'react-router-dom'
import { QuizPage, LoaderPage, EmailPage, DownloadPage, NotFoundPage, WelcomeQuiz } from 'pages'
import { QuizLayout } from 'components'
import { ROUTES } from './routes.utils'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.QUIZ} />} />
      <Route path={ROUTES.HOME} element={<QuizLayout />}>
        <Route path={ROUTES.QUIZ} element={<WelcomeQuiz />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />}>
          <Route path={ROUTES.QUIZ_INDEX} element={<QuizPage />} />
        </Route>
        <Route path={ROUTES.LOADING} element={<LoaderPage />} />
        <Route path={ROUTES.EMAIL} element={<EmailPage />} />
        <Route path={ROUTES.DOWNLOAD} element={<DownloadPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes