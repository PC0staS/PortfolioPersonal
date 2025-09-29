"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function MainScreen() {
  const cv = "/cv.pdf";

  useGSAP(() => {
    // Ocultar inicialmente para evitar flash
    gsap.set(["#nombre", "#sobre-mi-texto", "#contacto-button", "#cv-button"], {
      visibility: "visible",
    });

    const splitNombre = new SplitText("#nombre", { type: "chars" });
    const splitSobreMi = new SplitText("#sobre-mi-texto", { type: "lines" });

    // Timeline para secuenciar las animaciones
    const tl = gsap.timeline();

    // Animar nombre carácter por carácter
    tl.from(splitNombre.chars, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "back.out(1.7)",
      color: "black",
      stagger: 0.05,
    })
      .fromTo(
        splitSobreMi.lines,
        {
          duration: 1,
          ease: "power2.out",
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        }
      )
      .fromTo(
        "#contacto-button",
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      )
      .fromTo(
        "#cv-button",
        {
          x: 100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "<"
      );
  });

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <Image
        src="/img/me.jpeg"
        alt="Description"
        width={200}
        height={200}
        className="rounded-full border-3 border-white"
      />
      <h1
        id="nombre"
        className="text-xl sm:text-2xl font-extrabold mt-4 text-center invisible"
      >
        ¡Hola! Soy Pablo Costas
      </h1>
      <h2
        id="sobre-mi-texto"
        className="invisible text-base sm:text-lg mt-4 text-gray-600 dark:text-gray-400 text-center max-w-3xl leading-relaxed px-2 whitespace-pre-line min-h-[8rem] "
      >
        Estoy estudiando Administración de Sistemas Informáticos en Red. Me
        interesa la ciberseguridad y el mantenimiento de sistemas. Además, me
        encanta el desarrollo de aplicaciones web y multiplataforma. El próximo
        paso es estudiar DAW y DAM para completar mi perfil full-stack. Mientras
        tanto, te enseño mis proyectos con los que aprendo:
      </h2>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm text-center">
        <a
          id="contacto-button"
          href="#contacto"
          className="invisible bg-white text-black py-3 px-6 rounded-full border-2 border-black dark:border-white cursor-pointer hover:scale-110 transition-all text-sm sm:text-base text-center"
        >
          Contacta conmigo
        </a>
        <a
          id="cv-button"
          onClick={() => window.open(cv)}
          className="invisible bg-black text-white border-2 border-white py-3 px-6 rounded-full cursor-pointer hover:scale-110 transition-all text-sm sm:text-base text-center"
        >
          Descarga mi CV
        </a>
      </div>
    </div>
  );
}
