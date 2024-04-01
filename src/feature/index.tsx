import { ConcernTagSelector as ConcernTagSelectorFeature } from './ConcernTagSelector/ConcernTagSelector';
import { ConcernFormViewModel } from './ConcernFormViewModel/ConcernFormViewModel';
import { TourList as TourListFeature } from './TourList/TourList';
import { DateSelector as DateSelectorFeature } from './DateSelector/DateSelector';
import { CommunitySelector as CommunitySelectorFeature } from './CommunitySelector/CommunitySelector';

export const ConcernTagSelector = () => {
  return (
    <ConcernFormViewModel>
      <ConcernTagSelectorFeature />
    </ConcernFormViewModel>
  );
};

export const TourList = () => {
  return (
    <ConcernFormViewModel>
      <TourListFeature />
    </ConcernFormViewModel>
  );
};

export const DateSelector = () => {
  return (
    <ConcernFormViewModel>
      <DateSelectorFeature />
    </ConcernFormViewModel>
  );
};

export const CommunitySelector = () => {
  return (
    <ConcernFormViewModel>
      <CommunitySelectorFeature />
    </ConcernFormViewModel>
  );
};
