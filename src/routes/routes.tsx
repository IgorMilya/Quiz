import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { QuizPage, LoaderPage, EmailPage, DownloadPage, NotFoundPage, WelcomeQuiz } from 'pages'
import { QuizLayout } from 'components'
import { ROUTES } from './routes.utils'
import { questions } from 'utils/questionData'

const AppRoutes = () => {
  const { pathname } = useLocation()
  const index = pathname.split('/').pop()

  if (Number(index) > questions.length) {
    return (
      <div className="bg-background h-screen">
        <div className="container pl-[20px] pr-[20px] h-full mx-auto max-w-[900px]">
          <NotFoundPage />
        </div>
      </div>
    )
  }
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
      </Route>
    </Routes>
  )
}

export default AppRoutes