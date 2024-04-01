import { mockCard } from '../../shared/constants/mockCard';
import { SaleCard } from '../../entities/SaleCard/SaleCard';
import { Button } from 'antd';
import { ShareIcon } from '../../shared/icons/ShareIcon';

import './TourList.scss';
import { useConcernFormViewModel } from '../ConcernFormViewModel/ConcernFormViewModel';

export const TourList = () => {
  const { handleSelectStep } = useConcernFormViewModel();

  const handleClickBtnBack = () => {
    handleSelectStep('select-tag');
  };

  return (
    <div className='tour-space concern-form-space'>
      <h4>Подобрали 3 самых интересных варианта!</h4>
      <h5>Посмтреть автомобили и поесть бургеров с детьми</h5>

      <div className='card-list'>
        {mockCard.map(({ id, title, imgUrl, address, price }) => (
          <SaleCard key={id} imgUrl={imgUrl} title={title} address={address} price={price} />
        ))}
      </div>

      <div className='action-button-panel'>
        <Button type='text'>Другие варианты</Button>
        <Button type='text'>
          Поделиться <ShareIcon />
        </Button>
      </div>

      <Button onClick={handleClickBtnBack} className='back-to-start-btn' type='text'>
        Вернуться к началу
      </Button>
    </div>
  );
};
