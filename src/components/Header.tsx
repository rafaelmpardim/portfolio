import Image from 'next/image'

import { Link } from './Link'

import logo from '../assets/logo.svg'

export function Header() {
	return (
		<header
			className='flex items-center justify-between max-w-[1240px] m-auto p-6'
		>
			<Image
				alt='Logo da marca Rafael Pardim'
				className='w-8'
				src={logo}
				title='@rafaelmpardim'
			/>
      
			<Link
				href='https://linkedin.com/in/rafaelmpardim'
			>
        Mais informações
			</Link>
		</header>
	)
}