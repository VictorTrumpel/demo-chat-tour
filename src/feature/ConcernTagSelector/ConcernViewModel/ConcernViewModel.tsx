import { createContext, useContext, ReactNode } from 'react';
import { useTDispatch } from '../../../shared/hooks/useTDispatch';
import { useTSelector } from '../../../shared/hooks/useTSelector';
import { concernSliceActions } from '../model/concernSlice';
import { appSliceActions } from '../../../app/model/appSlice';

type ConcernViewModelType = {
  checkedConcernTags: string[];
  handleSelectTag(tag: string): void;
  handleUnselectTag(tag: string): void;
  handleSubmitTags(): void;
};

export const ConcernViewModelContext = createContext<ConcernViewModelType | null>(null);

const { addConcernTag, deleteConcernTag } = concernSliceActions;
const { selectMode } = appSliceActions;

export const ConcernViewModel = ({ children }: { children: ReactNode }) => {
  const checkedConcernTags = useTSelector((state) => state.concern.checkedTags);

  const dispatch = useTDispatch();

  const handleSelectTag = (tag: string) => {
    dispatch(addConcernTag(tag));
  };

  const handleUnselectTag = (tag: string) => {
    dispatch(deleteConcernTag(tag));
  };

  const handleSubmitTags = () => {
    dispatch(selectMode('show'));
  };

  return (
    <ConcernViewModelContext.Provider
      value={{ checkedConcernTags, handleSelectTag, handleUnselectTag, handleSubmitTags }}
    >
      {children}
    </ConcernViewModelContext.Provider>
  );
};

export const useConcernViewModel = () => {
  const context = useContext(ConcernViewModelContext);
  if (!context) throw new Error('useConcernViewModel needs in <ConcernViewModelContext />');
  return context;
};
