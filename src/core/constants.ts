import Angular from '../icons/Angular.astro'
import Php from '../icons/Php.astro'
import Spring from '../icons/Spring.astro'
import Symfony from '../icons/Symfony.astro'
import Wordpress from '../icons/Wordpress.astro'

export const EXPERIENCE = [
	{
		title: 'Desarrollador Frontend',
		company: 'Better Consultants',
		time: 'Julio 2024 - Actualidad',
		startDate: new Date('2024-07-01'),
		endDate: new Date(),
		description:
			'Desarrollo de aplicaciones angular en sistema microfrontal. Desarrollo de componentes reutilizables y mantenimiento de aplicaciones ya existentes. Implementación de nuevas funcionalidades y corrección de errores.',
		link: '#',
		tech: [{ name: 'Angular', className: 'bg-[#750f2f]/25 text-white', Icon: Angular }]
	},
	{
		title: 'Centers Developer',
		company: 'NTT Data',
		time: 'Noviembre 2021 - Enero 2024',
		startDate: new Date('2021-11-01'),
		endDate: new Date('2024-01-31'),
		description:
			'Desarrollo y mantenimiento de soluciones innovadoras en el proyecto de la Junta de Andalucía del litoral andaluz. Análisis de tareas, revisiones de soluciones y resolución de incidencias asegurando una alta calidad de código.',
		link: '#',
		tech: [
			{ name: 'Angular', className: 'bg-[#750f2f]/25 text-white', Icon: Angular },
			{ name: 'Spring', className: 'bg-[#3b6f26]/25 text-white', Icon: Spring }
		]
	},
	{
		title: 'Desarrollador backend',
		company: 'Intelia',
		time: 'Prácticas',
		startDate: new Date('2021-01-01'),
		endDate: new Date('2021-01-01'),
		description:
			'Desarrollo de un plugin de wordpress que sincronizaba los productos de una CDP (Customer Data Platform) con su tienda online. Este plugin también permitía un sistema de fidelización y un sistema de recomendaciones de productos basados en IA y con productos que el cliente podía preestablecer a través de la CDP',
		tech: [
			{ name: 'Symfony', className: 'bg-black/25 text-white', Icon: Symfony },
			{ name: 'Php', className: 'bg-[#484b73]/25 text-white', Icon: Php },
			{ name: 'Wordpress', className: 'bg-[#124055]/25 text-white', Icon: Wordpress }
		]
	}
]

// Calcula los años de experiencia basandote en los empleos listados
export const YEARS_OF_EXPERIENCE = EXPERIENCE.reduce((total, experience) => {
	const start = experience.startDate
	const end = experience.endDate
	if (!start || !end) return total

	const years =
		end.getFullYear() - start.getFullYear() - (end.getMonth() < start.getMonth() ? 1 : 0)
	return total + years
}, 0)
