import { createContext, ReactNode, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useTSelector } from '../../../shared/hooks/useTSelector';
import { appSliceActions } from '../../../app/model/appSlice';

export type TourListViewModelType = {
  checkedConcernTags: string[];
  handleBackToCheckConcern(): void;
};

export const TourListViewModelContext = createContext<TourListViewModelType | null>(null);

const { selectMode } = appSliceActions;

export const TourListViewModel = ({ children }: { children: ReactNode }) => {
  const checkedConcernTags = useTSelector((state) => state.concern.checkedTags);
  const dispatch = useDispatch();

  const handleBackToCheckConcern = () => {
    dispatch(selectMode('select'));
  };

  return (
    <TourListViewModelContext.Provider value={{ checkedConcernTags, handleBackToCheckConcern }}>
      {children}
    </TourListViewModelContext.Provider>
  );
};

export const useTourListViewModel = () => {
  const context = useContext(TourListViewModelContext);
  if (!context) throw new Error('useTourListViewModel needs in <TourListViewModelContext />');
  return context;
};
