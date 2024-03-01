import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trans } from 'react-i18next'
import { Button } from 'UI'
import { ROUTES } from 'routes'


const WelcomeQuiz: FC = () => {
  const navigate = useNavigate()
  const handleTakeQuiz = () => {
    navigate(ROUTES.START_QUIZ)
  }
  return (
    <div className="flex flex-col items-center relative h-full pt-[200px]">
      <h1 className="font-cursive text-[#ECECFB] text-[60px]">
        Welcome to quiz
      </h1>
      <div className="absolute w-full bottom-[20px] flex flex-col items-center">
        <Button variant="contained" onClick={handleTakeQuiz}>
          Start quiz
        </Button>
      </div>
    </div>
  )
}

export default WelcomeQuiz