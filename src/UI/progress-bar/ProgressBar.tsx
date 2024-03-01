import { FC } from 'react'

interface ProgressBarProps {
  numberOfQuestions: number,
  progress: number
}

const ProgressBar: FC<ProgressBarProps> = ({progress,numberOfQuestions}) => {
  return (
    <div className="flex items-centerl">
      <div className=" w-full h-1 bg-[#E8EAF2] relative rounded-full">
        <div
          className="h-full bg-primary-pinkLite absolute left-0 top-0 rounded-full"
          style={{ width: `${(progress / (numberOfQuestions + 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;