import { useTSelector } from '../../shared/hooks/useTSelector';
import { ConcernTagSelector } from '../../feature/ConcernTagSelector';
import { TourList } from '../../feature/TourList';

export const ChatContent = () => {
  const mode = useTSelector((state) => state.app.mode);

  if (mode === 'select') return <ConcernTagSelector />;

  return <TourList />;
};
