import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface QuizLayoutProps {

}

const QuizLayout: FC<QuizLayoutProps> = () => {

  return (
    <div className="bg-background h-screen">
      <div className="container pl-[20px] pr-[20px] h-full m-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default QuizLayout