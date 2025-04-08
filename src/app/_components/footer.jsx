import Image from "next/image";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              DGR Soluções Tecnológicas
            </h3>
            <p className="mb-4">Inovação que impulsiona o seu futuro! 🚀</p>
            <a
              href={`https://wa.me/5561982753197?text=Olá vim pelo site, quero saber mais informações.`}
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: email@dgr.com</p>
            <p>Telefone: (61) 999999999</p>
            <p>
              St. de Indústrias Q 2 Rua B Lotes 1 a 6 - Sobradinho, Brasília -
              DF
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <LinkedinLogo className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <GithubLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
