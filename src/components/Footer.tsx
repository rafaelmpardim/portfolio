import { Link } from './Link'

export function Footer() {
	return (
		<footer
			className='flex items-center justify-center max-w-[1240px] mx-auto mt-16 py-6'
		>
			<ul
				className='flex items-center gap-8'
			>
				<li>
					<Link href='https://github.com/rafaelmpardim'>
						github
					</Link>
				</li>
				<li>
					<Link href='https://instagram.com/rafaelmpardim'>
						instagram
					</Link>
				</li>
				<li>
					<Link href='https://linkedin.com/in/rafaelmpardim'>
						linkedin
					</Link>
				</li>
			</ul>
		</footer>
	)
}