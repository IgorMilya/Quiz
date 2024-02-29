import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header, QuestionContext } from 'components'
import { ROUTES } from 'routes'
import { questions } from './quizPage.utils'


const QuizPage: FC = () => {
  const { index } = useParams()
  const [progress, setProgress] = useState<number>(Number(index))
  const navigate = useNavigate()
  const handleNext = () => {
    if (progress === questions.length) {
      navigate(`${ROUTES.EMAIL}`)
    } else {
      navigate(`${progress + 1}`)
    }
  }

  useEffect(() => {
    setProgress(Number(index))
  }, [index])

  return (
    <>
      <Header numberOfQuestions={questions.length} params={index} progress={progress} />
      <QuestionContext handleNext={handleNext} questions={questions} index={index} />
    </>
  )
}

export default QuizPage