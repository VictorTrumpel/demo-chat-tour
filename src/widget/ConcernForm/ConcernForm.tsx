import { useTSelector } from '../../shared/hooks/useTSelector';
import { ConcernTagSelector } from '../../feature';
import { Progress } from 'antd';
import { DateSelector } from '../../feature';
import './ConcernForm.scss';

export const ConcernForm = () => {
  const currentStep = useTSelector((state) => state.concern.currentStep);

  return (
    <div className='chat-window'>
      <Progress
        className='progress-circle'
        type='circle'
        percent={80}
        size='small'
        strokeLinecap='butt'
        showInfo={false}
        strokeWidth={50}
        trailColor='#62C55433'
        strokeColor='#62C554'
      />
      {currentStep === 'select-tag' && <ConcernTagSelector />}
      {currentStep === 'select-date' && <DateSelector />}
    </div>
  );
};
