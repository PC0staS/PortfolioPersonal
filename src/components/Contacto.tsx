export default function Contacto() {
  const email = "pablocostasnieto@gmail.com";

  return (
    <section id="contacto" className="mt-20">
      <div className="mx-auto  rounded-2xl p-[1px] bg-gradient-to-r from-zinc-500/40 via-zinc-300/30 to-zinc-500/40 dark:from-zinc-600/50 dark:via-white/10 dark:to-zinc-600/50">
        <div className="rounded-2xl bg-white/90 text-gray-900 dark:bg-[#1e1e1e] dark:text-white shadow-lg">
          <div className="flex flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              ¡Hablemos!
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center max-w-xl">
              ¿Te gustaría colaborar, tienes alguna pregunta o solo quieres
              saludar? ¡Estoy disponible!
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors shadow-sm hover:shadow"
                aria-label="Enviar email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.977 1.874l-7.5 5.25a2.25 2.25 0 01-2.546 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/pablocostasnieto/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-sm hover:shadow"
                aria-label="Abrir LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Pc0staS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-zinc-100 text-gray-900 font-semibold hover:bg-zinc-200 transition-colors shadow-sm hover:shadow dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
                aria-label="Abrir GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
