import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiFigma, SiChakraui } from 'react-icons/si'

export function TechsList() {
	return (
		<ul
			className='
				flex gap-6
				sm:flex-col
			'
		>
			<li className='w-8 lg:w-10'>
				{<SiJavascript size='100%' title='JavaScript'/>}
			</li>
			<li className='w-8 lg:w-10'>
				{<SiTypescript size='100%' title='TypeScript'/>}
			</li>
			<li className='w-8 lg:w-10'>
				{<SiReact size='100%' title='Reactjs'/>}
			</li>
			<li className='w-8 lg:w-10'>
				{<SiNextdotjs size='100%' title='Next.js'/>}
			</li>
			<li className='w-8 lg:w-10'>
				{<SiChakraui size='100%' title='Vercel'/>}
			</li>
			<li className='w-8 lg:w-10'>
				{<SiFigma size='100%' title='Tailwind CSS'/>}
			</li>
		</ul>
	)
}