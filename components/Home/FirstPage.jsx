import ScrollToBottom from 'react-scroll-to-bottom';
import Messages from '../Messages/Messages';
import Header from './Header';

const FirstPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <Header />
        <ScrollToBottom className="h-[310px] w-full">
          <Messages />
        </ScrollToBottom>
      </div>
    </div>
  );
};

export default FirstPage;
