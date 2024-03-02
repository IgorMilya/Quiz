import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'UI'

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const errorTextStyle = 'text-white text-[70px] font-extrabold'

  const handleBack = () => navigate(-1);

  return (
    <div className="h-full flex flex-col justify-center items-center relative">
      <h1 className={errorTextStyle}>404</h1>
      <p className={errorTextStyle}>not found</p>
      <div className="w-full absolute bottom-[20px]">
      <Button variant="contained" onClick={handleBack}>Back</Button>
      </div>
    </div>
  )
}

export default NotFoundPage