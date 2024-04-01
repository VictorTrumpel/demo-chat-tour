import { createContext, useContext, ReactNode } from 'react';
import { useTDispatch } from '../../shared/hooks/useTDispatch';
import { useTSelector } from '../../shared/hooks/useTSelector';
import { concernSliceActions } from '../../model/concernSlice';
import { ConcernStateType } from '../../model/concernSlice';
import { CalendarProps } from 'antd';

type ConcernViewModelType = {
  currentStep: ConcernStateType['currentStep'];
  checkedConcernTags: string[];
  interestPromt: string;
  date: CalendarProps<any>['value'];
  datePromt: string;
  communityTags: string[];

  handleSelectTag(tag: string): void;
  handleUnselectTag(tag: string): void;
  handleSelectStep(step: ConcernViewModelType['currentStep']): void;
  handleChangeInterestPromt(text: string): void;
  handleSelectDate(dateStr: string): void;
  handleChangeDatePromt(text: string): void;
  handleSelectCommunityTag(text: string): void;
  handleUnselectCommunityTag(text: string): void;
};

export const ConcernViewModelContext = createContext<ConcernViewModelType | null>(null);

const {
  addConcernTag,
  deleteConcernTag,
  setCurrentStep,
  setInterestPromt,
  setDate,
  setDatePromt,
  addCommunityTag,
  deleteCommunityTag,
} = concernSliceActions;

export const ConcernFormViewModel = ({ children }: { children: ReactNode }) => {
  const checkedConcernTags = useTSelector((state) => state.concern.checkedConcernTags);
  const currentStep = useTSelector((state) => state.concern.currentStep);
  const interestPromt = useTSelector((state) => state.concern.interestPromt);
  const date = useTSelector((state) => state.concern.date);
  const datePromt = useTSelector((state) => state.concern.datePromt);
  const communityTags = useTSelector((state) => state.concern.checkedCommunityTags);

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

  const handleChangeInterestPromt = (text: string) => {
    dispatch(setInterestPromt(text));
  };

  const handleSelectDate = (date: any) => {
    dispatch(setDate(date));
  };

  const handleChangeDatePromt = (text: string) => {
    dispatch(setDatePromt(text));
  };

  const handleSelectCommunityTag = (tag: string) => {
    dispatch(addCommunityTag(tag));
  };

  const handleUnselectCommunityTag = (tag: string) => {
    dispatch(deleteCommunityTag(tag));
  };

  return (
    <ConcernViewModelContext.Provider
      value={{
        currentStep,
        interestPromt,
        checkedConcernTags,
        date,
        datePromt,
        communityTags,

        handleSelectTag,
        handleUnselectTag,
        handleSelectStep,
        handleChangeInterestPromt,
        handleSelectDate,
        handleChangeDatePromt,
        handleSelectCommunityTag,
        handleUnselectCommunityTag,
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
