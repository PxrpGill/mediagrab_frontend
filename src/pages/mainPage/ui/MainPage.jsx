import { Content } from "@/widgets/Content";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Background } from "@/widgets/background";
import { observer } from "mobx-react-lite";

export const MainPage = observer(() => {
  return (
    <>
      <Header />
      <Background />
      <Content />
      <Footer />
    </>
  )
});