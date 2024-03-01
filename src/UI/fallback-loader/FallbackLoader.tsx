import React, { FC } from 'react'


const FallbackLoader: FC = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div
        className="w-[60px] h-[60px] border-[5px] border-white border-t-[transparent] border-b-primary-pinkLite rounded-full animate-spin"></div>

    </div>
  )
}

export default FallbackLoader