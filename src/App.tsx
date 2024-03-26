import { FloatButton, Popover } from 'antd';
import { ConcernTagSelector } from './feature/ConcernTagSelector';
import { ChatContent } from './widget/ChatContent/ChatContent';
import './App.scss';

export const App = () => {
  return (
    <>
      <Popover
        trigger='click'
        className='ONLY CONTENT'
        content={<ChatContent />}
        rootClassName='concern-chat-popover'
      >
        <FloatButton className='chat-float-btn' icon={<img src='/admin.png' alt='' />} />
      </Popover>
    </>
  );
};

export default App;
