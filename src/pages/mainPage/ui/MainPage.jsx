import { Content } from '@/widgets/Content';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { Background } from '@/widgets/Background';
import { observer } from 'mobx-react-lite';

export const MainPage = observer(() => {
  return (
    <>
      <Header />
      <Background />
      <Content />
      <Footer />
    </>
  );
});
