import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import DGRimg from "../../../public/DGR_solucoes.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          src={DGRimg}
          alt="Foto DGR"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />

        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cools-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4x1 lg:text-5xl font-bold leading-10">
              Você precisa de soluções em TI?
            </h1>
            <p className="lg:text-lg">   
              A DGR Soluções Tecnológicas é especialista em inovação e
              automação. Oferecemos desde soluções avançadas em Inteligência
              Artificial até desenvolvimento de plataformas personalizadas e
              integrações inteligentes para otimizar seus processos. Seja para
              automatizar tarefas, criar sistemas inteligentes ou desenvolver
              ferramentas sob medida, nós temos a solução ideal para você!{" "}
            </p>
            <div>
              <a
                href={`https://wa.me/5561982753197?text=Olá vim pelo site, quero saber mais informações.`}
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2  mb-4"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>

              <div className="hidden md:block h-full relative">
                <Image
                  src={DGRimg}
                  alt="Foto DGR"
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 0vw, 50vw"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
