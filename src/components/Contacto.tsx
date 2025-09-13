export default function Contacto() {
    return (
        <div id="contacto" className="mt-20 flex flex-col items-center justify-center min-h-[20vh] bg-[#1e1e1e]  rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold bg-clip-text text-white">¡Hablemos!</h2>
            <p className="text-lg text-gray-400 mb-8">¿Te gustaría colaborar, tienes alguna pregunta o solo quieres saludar? ¡Estoy disponible!</p>
            <div className="flex flex-row items-center gap-6">
                <a href="mailto:pablocostasnieto@gmail.com" className="flex items-center gap-2 text-xl font-semibold text-white cursor-pointer hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.977 1.874l-7.5 5.25a2.25 2.25 0 01-2.546 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75" />
                    </svg>
                </a>
                <a href="https://github.com/Pc0staS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-semibold text-white cursor-pointer hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
