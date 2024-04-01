import { FloatButton, Popover } from 'antd';
import { ConcernForm } from './widget';
import './App.scss';
import './shared/styles/shared-styles.scss';

export const App = () => {
  return (
    <>
      <Popover
        trigger='click'
        className='ONLY CONTENT'
        content={<ConcernForm />}
        rootClassName='concern-chat-popover'
      >
        <FloatButton className='chat-float-btn' icon={<img src='./admin.png' alt='' />} />
      </Popover>
    </>
  );
};

export default App;
