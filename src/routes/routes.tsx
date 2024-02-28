import { Navigate, Route, Routes } from 'react-router-dom'
import { QuizLayout, QuizPage } from 'pages'
import { ROUTES } from './routes.utils'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigate to={`${ROUTES.QUIZ}/1`} />} />
      <Route path={ROUTES.HOME} element={<QuizLayout />}>
        <Route path={ROUTES.QUIZ} element={<Navigate to={'1'} />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />}>
          <Route path={ROUTES.QUIZ_INDEX} element={<QuizPage />} />
        </Route>
        <Route path={ROUTES.EMAIL} element={<Navigate to={ROUTES.EMAIL} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes