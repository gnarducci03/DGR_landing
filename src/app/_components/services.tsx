"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Robot } from "@phosphor-icons/react/dist/ssr";
import { Code } from "@phosphor-icons/react/dist/ssr";
import { Brain } from "@phosphor-icons/react/dist/ssr";
import { Cpu } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Automações",
    description:
      "Simplifique processos, aumente a eficiência e reduza custos com nossas soluções de automação inteligente. Desde integração de sistemas e workflows automatizados até chatbots com IA e análises avançadas, garantimos que sua empresa opere de forma ágil e inovadora.",
    icon: <Robot />,
    linkText: "Olá, vi no site sobre Automação e gostaria de mais informações.",
  },
  {
    title: "Desenvolvimento de plataformas",
    description:
      "Criamos plataformas digitais personalizadas para atender às necessidades do seu negócio. Seja um sistema web, um aplicativo mobile, um marketplace, um portal de serviços ou qualquer outro tipo de plataforma, garantimos soluções inovadoras, seguras e escaláveis conforme sua demanda.",
    icon: <Code />,
    linkText:
      "Olá, quero Criar minha Plataforma e gostaria de mais informações.",
  },
  {
    title: "Serviços de IA",
    description:
      "Aprimore seu negócio com IA avançada! Desenvolvemos soluções inteligentes para automação, análise de dados e tomada de decisão, ajudando sua empresa a ganhar eficiência e inovação.",
    icon: <Brain />,
    linkText:
      "Olá, vi no site que vocês fazem serviços com IA e gostaria de mais informações.",
  },
  {
    title: "Serviços Customizados",
    description:
      "Cada negócio tem desafios únicos, e é por isso que oferecemos soluções customizadas para atender às suas necessidades específicas. Desenvolvemos softwares sob medida, automações inteligentes e integrações personalizadas, garantindo que sua empresa tenha exatamente o que precisa para crescer com eficiência.",
    duration: "",

    icon: <Cpu />,
    linkText:
      "Olá, Queria um serviço customizado e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width:768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container px-4 mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-12">Serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="text-bold text-xl mb-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm select-none">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Robot className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>

                        <a
                          href={`https://wa.me/5561982753197?text=Olá vim pelo site, quero saber mais informações.`}
                          className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                        >
                          <WhatsappLogo className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-white flex-items-center justify-center rounded-full shadow-lg w-10 h10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronsLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              className="bg-white flex-items-center justify-center rounded-full shadow-lg w-10 h10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronsRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
