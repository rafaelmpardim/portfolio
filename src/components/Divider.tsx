import clsx from 'clsx'

interface DivederProps {
	className?: string
	vertical?: boolean
}

export function Divider({ className, vertical = false }: DivederProps) {
	return !vertical
		? (
			<hr
				className={
					clsx(
						'w-full h-[2px] border-none bg-gradient-to-r from-cyan-900 to-pink-850 my-4',
						className
					)
				}
			/>
		) : (
			<hr
				className={
					clsx(
						'h-auto w-[2px] border-none bg-gradient-to-b from-cyan-900 to-pink-850',
						className
					)
				}
			/>
		)
}