import { ReactNode } from 'react'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import clsx from 'clsx'

interface LinkProps extends NextLinkProps {
  children: ReactNode
  className?: string
}

export function Link({ children, className, ...rest }: LinkProps) {
	return (
		<NextLink
			className={
				clsx(
					'text-cyan-900 hover:text-cyan-950 transition-colors',
					className
				)
			}
			target='_blank'
			{...rest}
		>
			{children}
		</NextLink>
	)
}