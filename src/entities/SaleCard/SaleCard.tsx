import { Button } from 'antd';
import { HeartIcon } from '../../shared/icons/HeartIcon';
import { RateMark } from '../../shared/ui/RateMark/RateMark';
import './SaleCard.scss';

type SaleCardProps = {
  imgUrl: string;
  title: string;
  address: string;
  price: string;
};

export const SaleCard = ({ imgUrl, title, address, price }: SaleCardProps) => {
  return (
    <div className='sale-card'>
      <RateMark rate={8.5} />
      <div className='card-avatar'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <h5>{address.slice(0, 30)}</h5>
        <div className='card-action-panel'>
          <Button type='text' className='sale-btn'>
            от {price}
          </Button>
          <Button type='link' className='heart-btn'>
            <HeartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
