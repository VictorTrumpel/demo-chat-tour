import { useTourListViewModel } from '../TourListViewModel/TourListViewModel';
import { Timeline, TimelineItemProps, Card, Button } from 'antd';
import { useMemo } from 'react';
import { interests } from '../../../shared/constants/interests';
import './TourList.scss';

const interestsMap = new Map<string, (typeof interests)[number]>();

interests.forEach((int) => interestsMap.set(int.value, int));

const { Meta } = Card;

export const TourList = () => {
  const { checkedConcernTags, handleBackToCheckConcern } = useTourListViewModel();

  const points: TimelineItemProps[] = useMemo(() => {
    return checkedConcernTags.map((tag, idx) => ({
      children: (
        <Card
          hoverable
          style={{ width: 270 }}
          cover={<img alt='example' src={interestsMap.get(tag)?.imgUrl} />}
          actions={[
            <>{11 + idx}:00</>,
            <Button type='link' size='small'>
              {interestsMap.get(tag)?.actionTitle}
            </Button>,
          ]}
        >
          <Meta title={interestsMap.get(tag)?.title} description='www.some-link.com' />
        </Card>
      ),
    }));
  }, [checkedConcernTags]);

  return (
    <div className='chat-window tour-list'>
      <div className='timeline-container'>
        <Timeline items={points} />
      </div>
      <Button
        className='back-btn'
        onClick={handleBackToCheckConcern}
      >
        Назад
      </Button>
    </div>
  );
};
