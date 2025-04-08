import Image from "next/image";
import socios from "../../../public/Sócios.jpeg";
import imgDGR2 from "../../../public/DGR_solucoes2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container  px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={socios}
                alt="Foto Gabriel"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8  border-4 overflow-hidden rounded-lg border-red-400">
              <Image src={imgDGR2} alt="Foto DGR" fill quality={100} priority />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE NÓS</h2>
            <p className="text-lg text-gray-600">
              Na DGR Soluções Tecnológicas, acreditamos que a tecnologia é a
              chave para a eficiência e o crescimento. Somos uma empresa
              especializada em desenvolvimento de software e automação, criando
              soluções sob medida para atender às necessidades de cada cliente.
              Nosso foco é transformar processos complexos em sistemas simples e
              ágeis, integrando inteligência artificial, automação e
              desenvolvimento de plataformas para otimizar seu dia a dia.🚀
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500 inline-block mr-2" />
                Aberto desde 2025.
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500 inline-block mr-2" />
                Qualidade é nossa prioridade!
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500 inline-block mr-2" />
                Inovação que gera resultados.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href={`https://wa.me/5561982753197?text=Olá vim pelo site, quero saber mais informações.`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-5 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Entre em contato
              </a>

              <a
                href={`https://maps.app.goo.gl/1sdsfMN7KW2jRTif9`}
                className="items-center justify-center w-fit gap-2 px-5 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da empresa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
