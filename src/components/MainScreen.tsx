import Image from 'next/image';

export default function MainScreen() {
  return (
    <div className="flex flex-col items-center mt-10">
      <Image src="/img/me.jpeg" alt="Description" width={200} height={200} className='rounded-full border-3 border-white' />
      <h1 className="text-2xl font-extrabold mt-4">¡Hola! Soy Pablo Costas</h1>
      <h2 className="text-lg mt-4 text-gray-400 text-center">
        Estoy estudiando Administración de Sistemas Informáticos en Red. <br /> Además, me encanta el desarrollo de aplicaciones web y multiplataforma. <br /> El próximo paso es estudiar DAW y DAM para completar mi perfil full-stack. <br /> Mientras tanto, te enseño mis proyectos con los que aprendo:
      </h2>
      <div className='mt-8 flex flex-row justify-between w-100'>
        <button className="bg-white text-black py-2 px-4 rounded-full border-2 border-white">Contacta conmigo</button>
        <button className="bg-black text-white border-2 border-white py-2 px-4 rounded-full">Descarga mi CV</button>
      </div>
    </div>
  );
}
