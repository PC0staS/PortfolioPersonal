"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const texto = `Estoy estudiando Administración de Sistemas Informáticos en Red.
Me interesa la ciberseguridad y el mantenimiento de sistemas.
Además, me encanta el desarrollo de aplicaciones web y multiplataforma.
El próximo paso es estudiar DAW y DAM para completar mi perfil full-stack.
Mientras tanto, te enseño mis proyectos con los que aprendo:`;

export default function MainScreen() {
  const cv = "/cv.pdf";

  useGSAP(() => {
    // Ocultar inicialmente para evitar flash
    gsap.set(["#nombre", "#sobre-mi-texto"], { visibility: "visible" });

    const splitNombre = new SplitText("#nombre", { type: "chars" });

    // Timeline para secuenciar las animaciones
    const tl = gsap.timeline();

    // Animar nombre carácter por carácter
    tl.from(splitNombre.chars, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
    });

    // Después hacer split del texto y animarlo carácter por carácter
    tl.call(() => {
      // Primero ponemos el texto completo
      const elemento = document.querySelector("#sobre-mi-texto");
      if (!elemento) return;
      elemento.textContent = texto;

      // Luego lo dividimos en palabras y caracteres (para mantener estructura)
      const splitSobreMi = new SplitText("#sobre-mi-texto", {
        type: "words,chars",
        wordsClass: "word-wrapper",
        charsClass: "char-wrapper",
      });

      // Aplicar CSS a las palabras para evitar separación
      gsap.set(splitSobreMi.words, {
        display: "inline-block",
        whiteSpace: "nowrap", // Evita que las palabras se rompan
      });

      // Inicializar cada carácter como invisible
      gsap.set(splitSobreMi.chars, { opacity: 0 });

      // Animar cada carácter apareciendo uno por uno con efecto scramble
      splitSobreMi.chars.forEach((char, i) => {
        gsap.to(char, {
          duration: 0.4,
          scrambleText: {
            text: char.textContent,
            chars: "01",
            speed: 0.1,
          },
          opacity: 1,
          delay: i * 0.05, // Pequeño delay entre caracteres
        });
      });
    });
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
        {/* Contenido inicial vacío, se llenará con scramble */}
      </h2>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm text-center">
        <a
          href="#contacto"
          className="bg-white text-black py-3 px-6 rounded-full border-2 border-black dark:border-white cursor-pointer hover:scale-110 transition-all text-sm sm:text-base text-center"
        >
          Contacta conmigo
        </a>
        <a
          onClick={() => window.open(cv)}
          className="bg-black text-white border-2 border-white py-3 px-6 rounded-full cursor-pointer hover:scale-110 transition-all text-sm sm:text-base text-center"
        >
          Descarga mi CV
        </a>
      </div>
    </div>
  );
}
