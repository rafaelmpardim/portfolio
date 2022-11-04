import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.svg'

export function Header() {
	return (
		<header
			className='items-center flex justify-between max-w-[1440px] m-auto pt-6 pb-6'
		>
			<Image
				alt='Logo da marca Rafael Pardim' 
				src={logo}
			/>
      
			<Link
				className='text-2xl text-cyan-900 h-full'
				href='https://linkedin.com/in/rafaelmpardim'
			>
        Mais informações
			</Link>
		</header>
	)
}