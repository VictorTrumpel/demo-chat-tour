import { TagSpace } from '../../shared/ui/TagSpace/TagSpace';
import { NextSubmitInput } from '../../shared/ui/NextSubmitInput/NextSubmitInput';
import { useConcernFormViewModel } from '../ConcernFormViewModel/ConcernFormViewModel';
import { Calendar } from '../../shared/ui/Calendar/Calendar';
import './DateSelector.scss';

export const DateSelector = () => {
  const { checkedConcernTags, handleSelectStep } = useConcernFormViewModel();

  const handleGaBackToTags = () => {
    handleSelectStep('select-tag');
  };

  return (
    <div className='date-space concern-form-space'>
      <div className='tag-info-container'>
        <TagSpace tags={checkedConcernTags} checkedTags={checkedConcernTags} />
      </div>

      <h5 tabIndex={0} className='go-back-link' onClick={handleGaBackToTags}>
        Изменить
      </h5>

      <div className='divider' />

      <div className='calendar-info-container'>
        <h4>Подскажите дату</h4>
        <h5>А еще можете уточнить время в сообщении</h5>
      </div>

      <Calendar />

      <NextSubmitInput inputProps={{ placeholder: 'Можете уточнить время тут...' }} />
    </div>
  );
};
