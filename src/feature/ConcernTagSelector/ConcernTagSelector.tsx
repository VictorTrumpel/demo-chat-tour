import { InputProps } from 'antd';
import { useConcernFormViewModel } from '../ConcernFormViewModel/ConcernFormViewModel';
import { interests } from '../../shared/constants/interests';
import { NextSubmitInput } from '../../shared/ui/NextSubmitInput/NextSubmitInput';
import { TagSpace } from '../../shared/ui/TagSpace/TagSpace';
import { TypeAnimation } from 'react-type-animation';
import './ConcernTagSelector.scss';

const tags = interests.map((t) => t.label);

export const ConcernTagSelector = () => {
  const {
    checkedConcernTags,
    handleSelectTag,
    handleUnselectTag,
    handleSelectStep,
    interestPromt,
    handleChangeInterestPromt,
  } = useConcernFormViewModel();

  const handleClickTag = (tag: string) => {
    const hasAlreadyChecked = checkedConcernTags.includes(tag);

    if (hasAlreadyChecked) {
      handleUnselectTag(tag);
      return;
    }

    handleSelectTag(tag);
  };

  const handleSubmitTags = () => {
    handleSelectStep('select-date');
  };

  const handleTypeText: InputProps['onChange'] = (event) => {
    handleChangeInterestPromt(event.target.value);
  };

  return (
    <div className='concern-space concern-form-space'>
      <h4>
        <TypeAnimation
          sequence={['Интересует', 10, 'Интересует что-то конкретное?']}
          cursor={false}
        />
      </h4>
      <h5>Можно выбать несколько вариантов или написать самостоятельно</h5>

      <TagSpace checkedTags={checkedConcernTags} tags={tags} handleClickTag={handleClickTag} />

      <NextSubmitInput
        inputProps={{
          placeholder: 'Или введите свой вариант',
          value: interestPromt,
          onChange: handleTypeText,
        }}
        buttonProps={{ disabled: checkedConcernTags.length == 0, onClick: handleSubmitTags }}
      />
    </div>
  );
};
