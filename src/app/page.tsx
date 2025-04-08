import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Footer } from "./_components/footer";
import { ChatbotButton } from "./_components/chat";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Footer />
      <ChatbotButton />
    </main>
  );
}
