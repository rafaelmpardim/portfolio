import { useEffect, useState } from 'react'
import { RiGithubLine } from 'react-icons/ri'

import { api } from '../services/axios'

import { Divider } from './Divider'

export function GithubStats() {
	const [followers, setFollowers] = useState(0)
	const [gists, setGists] = useState(0)
	const [repos, setRepos] = useState(0)

	async function getGithubStats() {

		const response = await api.get('/users/rafaelmpardim')
		setFollowers(response.data.followers)
		setGists(response.data.public_gists)
		setRepos(response.data.public_repos)
	}

	useEffect(() => {
		getGithubStats()
	}, [])

	return (
		<div
			className='flex items-stretch justify-center gap-4 w-full'
		>
			<div className='flex flex-col gap-2 flex-1 items-center justify-center'>
				<RiGithubLine className='flex-1' size={40}/>
				<span className='text-sm text-cyan-900 text-center'>Github</span>
			</div>

			<Divider className='hidden lg:block' vertical />

			<div className='flex flex-col gap-2 flex-1 items-center justify-center'>
				<span className='text-xl text-gray-600 font-thin text-center'>
					{new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2}).format(followers)}
				</span>
				<span className='text-sm text-cyan-900 text-center'>Seguidores</span>
			</div>

			<Divider className='hidden lg:block' vertical />

			<div className='flex flex-col gap-2 flex-1 items-center justify-center'>
				<span className='text-xl text-gray-600 font-thin text-center'>
					{new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2}).format(gists)}
				</span>
				<span className='text-sm text-cyan-900 text-center'>Gists</span>
			</div>

			<Divider className='hidden lg:block' vertical />

			<div className='flex flex-col gap-2 flex-1 items-center justify-center'>
				<span className='text-xl text-gray-600 font-thin text-center'>
					{new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2}).format(repos)}
				</span>
				<span className='text-sm text-cyan-900 text-center'>Repositórios</span>
			</div>
		</div>
	)
}