import { createContext, useContext, ReactNode } from 'react';
import { useTDispatch } from '../../shared/hooks/useTDispatch';
import { useTSelector } from '../../shared/hooks/useTSelector';
import { concernSliceActions } from '../../model/concernSlice';
import { appSliceActions } from '../../app/model/appSlice';
import { ConcernStateType } from '../../model/concernSlice';

type ConcernViewModelType = {
  currentStep: ConcernStateType['currentStep'];
  checkedConcernTags: string[];
  handleSelectTag(tag: string): void;
  handleUnselectTag(tag: string): void;
  handleSelectStep(step: ConcernViewModelType['currentStep']): void;
};

export const ConcernViewModelContext = createContext<ConcernViewModelType | null>(null);

const { addConcernTag, deleteConcernTag, setCurrentStep } = concernSliceActions;

export const ConcernFormViewModel = ({ children }: { children: ReactNode }) => {
  const checkedConcernTags = useTSelector((state) => state.concern.checkedTags);
  const currentStep = useTSelector((state) => state.concern.currentStep);

  const dispatch = useTDispatch();

  const handleSelectTag = (tag: string) => {
    dispatch(addConcernTag(tag));
  };

  const handleUnselectTag = (tag: string) => {
    dispatch(deleteConcernTag(tag));
  };

  const handleSelectStep = (step: ConcernViewModelType['currentStep']) => {
    dispatch(setCurrentStep(step));
  };

  return (
    <ConcernViewModelContext.Provider
      value={{
        currentStep,
        checkedConcernTags,
        handleSelectTag,
        handleUnselectTag,
        handleSelectStep,
      }}
    >
      {children}
    </ConcernViewModelContext.Provider>
  );
};

export const useConcernFormViewModel = () => {
  const context = useContext(ConcernViewModelContext);
  if (!context) throw new Error('useConcernViewModel needs in <ConcernViewModelContext />');
  return context;
};
