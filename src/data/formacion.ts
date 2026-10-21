export type EstadoFormacion =
  | 'completado'
  | 'en-curso'
  | 'en-preparacion'
  | 'objetivo'

export interface FormacionItem {
  tipo: 'titulacion' | 'certificacion'
  titulo: string
  entidad: string
  periodo?: string
  estado: EstadoFormacion
  descripcion: string
}

/**
 * Fuente única de la sección "Formación y certificaciones".
 * Para añadir, mover o editar estudios basta con modificar este array:
 * el orden del array es el orden en pantalla.
 */
export const formacion: FormacionItem[] = [
  {
    tipo: 'titulacion',
    titulo: 'Técnico Superior en ASIR',
    entidad: 'Planeta FP, Vigo',
    periodo: '2024 — 2026',
    estado: 'completado',
    descripcion:
      'Administración de Sistemas Informáticos en Red, con perfil en ciberseguridad: sistemas, redes, servicios y seguridad.',
  },
  {
    tipo: 'titulacion',
    titulo: 'Técnico Superior en DAM',
    entidad: 'Planeta FP, Vigo',
    periodo: '2026 — Actualidad',
    estado: 'en-curso',
    descripcion:
      'Desarrollo de Aplicaciones Multiplataforma: software, bases de datos y aplicaciones móviles.',
  },
  {
    tipo: 'certificacion',
    titulo: 'eJPT',
    entidad: 'INE Security',
    estado: 'en-preparacion',
    descripcion:
      'Pentesting práctico: reconocimiento, explotación y post-explotación en laboratorio.',
  },
  {
    tipo: 'certificacion',
    titulo: 'PNPT',
    entidad: 'TCM Security',
    estado: 'objetivo',
    descripcion:
      'Pentesting realista con Active Directory, pivoting y elaboración de informes.',
  },
  {
    tipo: 'certificacion',
    titulo: 'OSCP',
    entidad: 'OffSec',
    estado: 'objetivo',
    descripcion:
      'Explotación y escalada de privilegios en un entorno de laboratorio.',
  },
]
