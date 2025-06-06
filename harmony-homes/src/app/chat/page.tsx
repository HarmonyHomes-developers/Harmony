import ChatWindow from '@/components/chat/ChatWindow';
import Header from '@/components/organisms/navbar';

export default function CataloguePage() {
  return (
    <>
      <Header />
      <ChatWindow/>
   </>
  );
}

export const metadata = {
  title: 'Window Chat | Harmony Homes',
  description: 'Browse our extensive collection of properties for sale and rent.',
};