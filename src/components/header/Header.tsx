import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ProgressBar } from 'UI'

interface HeaderProps {
  numberOfQuestions: number,
  params: string | undefined,
  progress: number,
}

const Header: FC<HeaderProps> = ({ numberOfQuestions, params, progress }) => {
  const navigate = useNavigate()

  const dotIterations = Array.from({ length: 3 }, (_, index) => index)
  const isParams = params === '1'
  const handleBack = () => navigate(-1)


  return (
    <header className="">
      <div className="flex justify-between items-center mb-2 pt-2 pb-2">
        <Button variant="text" onClick={handleBack} invisible={isParams}>
          <div className="w-[10px] h-[10px] border-b-[2.5px] border-l-[2.5px] rotate-45" />
        </Button>

        <p className="font-bold text-[18px] leading-5 text-[#E8EAF2] ">
          <span className="text-primary-pinkLite">{progress}</span>/{numberOfQuestions}
        </p>

        <div className="w-[24px] h-[24px] flex justify-between items-center">
          {dotIterations.map(i => (
            <div key={i} className="w-1 h-1 bg-[#E8EAF2] rounded-full" />))}
        </div>

      </div>
      <ProgressBar numberOfQuestions={numberOfQuestions} progress={progress} />
    </header>
  )
}

export default Header