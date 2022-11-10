import { ReactElement } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import Image from 'next/image'

import { Link } from './Link'
import clsx from 'clsx'

interface ProjectThumbnailProps {
  id: string | ReactElement
  title: string
	company?: string
  description: string
  link: string
	thumbnailUrl?: string
}

export function Project({ id, title, company, description, link, thumbnailUrl }: ProjectThumbnailProps) {
	return (
		<div
			className={clsx(
				{
					'sm:grid sm:grid-cols-2 sm:gap-4': !!thumbnailUrl
				}
			)}
		>
			<div className='flex flex-col items-start gap-4'>

				{
					typeof id === 'string' 
						? (
							<div
								className='
									flex items-center gap-4
									lg:flex-col lg:items-start
								'
							>
								<span className='text-xl text-gray-600 font-thin'>{id}</span>
								<h2 className='text-lg font-bold'>{title}</h2>
							</div>
						) : (
							<>
								{id}
								<h2 className='text-lg font-bold'>{title}</h2>
								<span className='text-sm text-gray-600'>{company}</span>
							</>
						)
				}

				<p className='text-sm'>{description}</p>

				<Link href={link} className='flex gap-4 items-center text-cyan-900'>
					<AiOutlineArrowRight size={24}/>
				Visualizar projeto
				</Link>
			</div>

			{
				thumbnailUrl ? <Image alt='' className='hidden sm:block' src={thumbnailUrl}/> : null
			}

		</div>
	)
}