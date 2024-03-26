import { useConcernViewModel } from '../ConcernViewModel/ConcernViewModel';
import { interests } from '../../../shared/constants/interests';
import { Tag, Button } from 'antd';
import './ConcernTagSelector.scss';

export const ConcernTagSelector = () => {
  const { checkedConcernTags, handleSelectTag, handleUnselectTag, handleSubmitTags } =
    useConcernViewModel();

  const handleClickTag = (tag: string) => {
    const hasAlreadyChecked = checkedConcernTags.includes(tag);

    if (hasAlreadyChecked) {
      handleUnselectTag(tag);
      return;
    }

    handleSelectTag(tag);
  };

  return (
    <div className='chat-window'>
      <div className='tag-space'>
        {interests.map(({ label, value }) => (
          <Tag
            key={value}
            onClick={() => handleClickTag(value)}
            color={checkedConcernTags.includes(value) ? 'processing' : ''}
          >
            {label}
          </Tag>
        ))}
      </div>
      <Button
        disabled={checkedConcernTags.length == 0}
        type='primary'
        className='submit-tags'
        onClick={handleSubmitTags}
      >
        Составить план
      </Button>
    </div>
  );
};
