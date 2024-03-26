import { ConcernTagSelector as ConcernTagSelectorFeature } from './view/ConcernTagSelector';
import { ConcernViewModel } from './ConcernViewModel/ConcernViewModel';

export const ConcernTagSelector = () => {
  return (
    <ConcernViewModel>
      <ConcernTagSelectorFeature />
    </ConcernViewModel>
  );
};
