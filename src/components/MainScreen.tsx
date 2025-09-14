'use client'

import Image from 'next/image';

export default function MainScreen() {
  const cv = "/cv.pdf"
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <Image src="/img/me.jpeg" alt="Description" width={200} height={200} className='rounded-full border-3 border-white' />
      <h1 className="text-xl sm:text-2xl font-extrabold mt-4 text-center">¡Hola! Soy Pablo Costas</h1>
      <h2 className="text-base sm:text-lg mt-4 text-gray-600 dark:text-gray-400 text-center max-w-3xl leading-relaxed px-2">
        Estoy estudiando Administración de Sistemas Informáticos en Red. <br /> 
        Además, me encanta el desarrollo de aplicaciones web y multiplataforma. <br /> 
        El próximo paso es estudiar DAW y DAM para completar mi perfil full-stack. <br /> 
        Mientras tanto, te enseño mis proyectos con los que aprendo:
      </h2>
      <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm'>
        <a href="#contacto" className="bg-white text-black py-3 px-6 rounded-full border-2 border-black dark:border-white cursor-pointer hover:scale-110 transition-all text-sm sm:text-base">
          Contacta conmigo
        </a>
        <a 
          onClick={() => window.open(cv)} 
          className="bg-black text-white border-2 border-white py-3 px-6 rounded-full cursor-pointer hover:scale-110 transition-all text-sm sm:text-base"
        >
          Descarga mi CV
        </a>
      </div>
    </div>
  );
}
