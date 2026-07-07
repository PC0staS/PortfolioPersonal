import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProyectoCard from '@/components/proyectoCards'

gsap.registerPlugin(ScrollTrigger)

interface Proyecto {
  slug: string
  title: string
  heroImage?: string
  githubRepo?: string
  demoLink?: string
  route?: string
}

interface ProyectosAnimatedProps {
  proyectos: Proyecto[]
}

export default function ProyectosAnimated({ proyectos }: ProyectosAnimatedProps) {
  useGSAP(() => {
    gsap.set('#proyectos-list li', { opacity: 0, y: 50 })

    ScrollTrigger.batch('#proyectos-list li', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
        })
      },
      onLeave: (elements) => {
        gsap.to(elements, { opacity: 0.1, y: -50, duration: 0.3 })
      },
      onEnterBack: (elements) => {
        gsap.to(elements, { opacity: 1, y: 0, duration: 0.3 })
      },
      start: 'top 85%',
      end: 'bottom 20%',
    })
  })

  return (
    <div id="proyectos" className="mt-20 text-center px-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400">
        Proyectos que he realizado:
      </h2>
      <ul
        id="proyectos-list"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 max-w-6xl mx-auto"
      >
        {proyectos.map((proyecto) => (
          <li key={proyecto.slug}>
            <ProyectoCard
              title={proyecto.title}
              photo={proyecto.heroImage ?? ''}
              repo={proyecto.githubRepo ?? ''}
              demolink={proyecto.demoLink ?? ''}
              route={proyecto.route ?? ''}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
