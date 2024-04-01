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

  handleSelectTag(tag: string): void;
  handleUnselectTag(tag: string): void;
  handleSelectStep(step: ConcernViewModelType['currentStep']): void;
  handleChangeInterestPromt(text: string): void;
  handleSelectDate(dateStr: string): void;
  handleChangeDatePromt(text: string): void;
};

export const ConcernViewModelContext = createContext<ConcernViewModelType | null>(null);

const { addConcernTag, deleteConcernTag, setCurrentStep, setInterestPromt, setDate, setDatePromt } =
  concernSliceActions;

export const ConcernFormViewModel = ({ children }: { children: ReactNode }) => {
  const checkedConcernTags = useTSelector((state) => state.concern.checkedTags);
  const currentStep = useTSelector((state) => state.concern.currentStep);
  const interestPromt = useTSelector((state) => state.concern.interestPromt);
  const date = useTSelector((state) => state.concern.date);
  const datePromt = useTSelector((state) => state.concern.datePromt);

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

  return (
    <ConcernViewModelContext.Provider
      value={{
        currentStep,
        interestPromt,
        checkedConcernTags,
        date,
        datePromt,

        handleSelectTag,
        handleUnselectTag,
        handleSelectStep,
        handleChangeInterestPromt,
        handleSelectDate,
        handleChangeDatePromt,
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
