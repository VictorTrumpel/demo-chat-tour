import { TourList as TourListFeature } from './view/TourList';
import { TourListViewModel } from './TourListViewModel/TourListViewModel';

export const TourList = () => {
  return (
    <TourListViewModel>
      <TourListFeature />
    </TourListViewModel>
  );
};
