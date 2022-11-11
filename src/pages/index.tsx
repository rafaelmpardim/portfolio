import Head from 'next/head'
import Image from 'next/image'

import { BsCreditCard } from 'react-icons/bs'
import { GiSoccerBall } from 'react-icons/gi'
import { SiInstagram, SiLinkedin, SiReact, SiSitepoint } from 'react-icons/si'

import { Divider } from '../components/Divider'
import { Footer } from '../components/Footer'
import { GithubStats } from '../components/GithubStats'
import { Header } from '../components/Header'
import { Link } from '../components/Link'
import { Project } from '../components/Project'
import { TechsList } from '../components/TechsList'

import dashgoThumbnailImg from '../assets/dashgo.svg'
import dtmoneyThumbnailImg from '../assets/dtmoney.svg'
import ignewsThumbnailImg from '../assets/ignews.svg'
import logoIgniteImg from '../assets/ignite-logo.svg'
import logoMadeImg from '../assets/madeincode.svg'
import rafaelImg from '../assets/rafael.svg'

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfólio - Rafael Pardim</title>

				{/* <!-- Meta SEO --> */}
				<meta name="author" content="Rafael Pardim" />
				<meta name="description" content="Portfólio de apresentação dos projetos desenvolvidos, carreira e informações pessoais." />
				<meta name="robots" content="index, follow" />

				{/* <!-- Meta SEO Social - Facebook --> */}
				<meta property="og:type" content="company" />
				<meta property="og:url" content="https://rafaelmpardim.vercel.app" />
				<meta property="og:site_name" content="Rafael Pardim | Dev front-end e UI Designer" />
				<meta property="og:title" content="Rafael Pardim | Dev front-end e UI Designer" />
				<meta property="og:description" content="Portfólio de apresentação dos projetos desenvolvidos, carreira e informações pessoais." />
				<meta property="og:image" content="https://user-images.githubusercontent.com/83538547/201237897-29e310cb-84b7-43b0-8785-790d7eaf365a.png" />

				{/* <!--  Meta SEO Social - Twitter --> */}
				<meta name="twitter:cards" content="summary" />
				<meta name="twitter:url" content="https://rafaelmpardim.vercel.app" />
				<meta name="twitter:title" content="afael Pardim | Dev front-end e UI Designer" />
				<meta name="twitter:description" content="Portfólio de apresentação dos projetos desenvolvidos, carreira e informações pessoais." />
				<meta property="twitter:image" content="https://user-images.githubusercontent.com/83538547/201237897-29e310cb-84b7-43b0-8785-790d7eaf365a.png" />
			</Head>

			<Header />

			<main className='flex flex-col gap-14 w-full'>
				<section
					className='
						flex flex-col items-center justify-center gap-8 max-w-[1240px] w-full m-auto px-6
						sm:grid sm:grid-cols-2
						lg:min-h-[80vh]
					'
				>
					<div
						className='
							flex flex-col items-center gap-4 w-full
							sm:flex-row
						'
					>
						<Image
							alt="Imagem de perfil de Rafael Pardim"
							src={rafaelImg} title='Rafael Pardim'
						/>
						<TechsList />
					</div>

					<div className='flex flex-col gap-8 w-full'>
						<div
							className='
								flex flex-col items-center gap-3 w-full
								sm:items-start
								lg:gap-6
							'
						>
							<h2
								className='
									text-lg text-center text-transparent font-bold bg-gradient-to-r from-cyan-900 to-pink-850 fill-transparent bg-clip-text
									sm:text-start
								'
							>
								Rafael Pardim
							</h2>
							<span
								className='
									text-md text-center font-medium
									sm:text-start
								'
							>
								Dev front-end, UI Designer e Cofundador da <Link href="https://www.madeincode.com.br">Made in Code</Link>
							</span>
							<span
								className='
									text-sm text-gray-600 text-center
									sm:text-start
								'
							>
								23 anos, pouco mais de um ano empreendendo dentro da bolha tech, lidando com código, prototipando designs e adaptando-se às mudanças.
							</span>
						</div>
					
						<GithubStats />
					</div>
				</section>

				<Divider />

				<section
					className='
						flex flex-col items-center gap-4 max-w-[1240px] m-auto px-6
						sm:grid sm:grid-cols-2
						lg:min-h-[60vh]
					'
				>
					<div className='flex flex-col gap-8 flex-1'>
						<div
							className='
								flex flex-col items-center gap-3 w-full
								sm:items-start
								lg:gap-6
							'
						>
							<ul className='flex items-center gap-3'>
								<li className='w-6'>
									<Link className='text-gray-100' href='https://instagram.com/madeincodetech'>
										{<SiInstagram size='100%'/>}
									</Link>
								</li>
								<li className='w-6'>
									<Link className='text-gray-100' href='https://linkedin.com/company/madeincodetech'>
										{<SiLinkedin size='100%'/>}
									</Link>
								</li>
								<li className='w-6'>
									<Link className='text-gray-100' href='https://www.madeincode.com.br'>
										{<SiSitepoint size='100%'/>}
									</Link>
								</li>
								<li>
									<Link className='text-md text-gray-100' href='https://blog.madeincode.com.br'>
										#BLOGDAMADE
									</Link>
								</li>
							</ul>
							<h2
								className='
									text-lg text-transparent font-bold bg-gradient-to-r from-cyan-900 to-pink-850 fill-transparent bg-clip-text
									sm:text-start	
								'
							>
								Made in Code
							</h2>
							<span
								className='
									text-md font-medium text-center
									sm:text-start
								'
							>
								Feito para o novo. Feito para o mundo.
							</span>
							<span
								className='
									text-sm text-gray-600 text-center
									sm:text-start
								'
							>
								Pensamos no novo, em ser diferentes. <br/>
								Fazendo em código, aprimoramos o existente questionando os problemas reais, transformando-os em inovação.
							</span>
						</div>
					</div>

					<Image alt="Logo da Made in Code" src={logoMadeImg} />
				</section>
				
				<Divider />

				<section
					className='
						flex flex-col items-center gap-10 max-w-[1240px] m-auto px-6
						sm:grid sm:grid-cols-1
						lg:min-h-[60vh] lg:grid-cols-2
					'
				>
					<div
						className='
							flex flex-col items-center gap-3
							sm:items-start
						'
					>
						<h2
							className='
								text-lg text-center text-transparent font-bold bg-gradient-to-r from-cyan-900 to-pink-850 fill-transparent bg-clip-text
								sm:text-start
							'
						>
								Trabalhos, estudos e eventos
						</h2>
						<span
							className='
								text-md text-center font-medium
								sm:text-start
							'
						>
								Confira alguns dos projetos que produzi como desenvolvedor front-end.
						</span>
						<ul className='list-disc pl-6 text-sm text-gray-600'>
							<li>Autenticação e controle de permissão</li>
							<li>Renderizações pelo servidor</li>
							<li>SPA - Single-page Application</li>
							<li>Métodos de pagamentos</li>
							<li>Conteúdo dinâmico via CMS</li>
						</ul>
					</div>
					<div
						className='
							flex flex-col items-center gap-4
							sm:hidden
							lg:flex
						'
					>
						<SiSitepoint size='50%'/>
						<span className='text-md font-medium'>
							transformando café em código
						</span>
					</div>
				</section>

				<section
					className='
						flex flex-col gap-5 w-full max-w-[1240px] m-auto px-6
						lg:grid lg:grid-cols-projects
					'
				>
					<div className='flex flex-col gap-1 uppercase'>
						<span className='text-md font-medium'>Estudos</span>
						<div className='flex gap-2'>
							<Image alt="Logo da Made in Code" src={logoIgniteImg} />
							<h2 className='text-lg font-bold uppercase'>
								Trilha Ignite
							</h2>
						</div>
						<Link className='normal-case' href='http://rocketseat.com.br'>
							@Rocketseat
						</Link>
					</div>

					<Divider className='hidden lg:block' vertical />

					<div className='flex flex-col gap-6'>
						<Project
							id='01'
							title='Dashgo'
							description='Painel administativo com fluxo de autenticação, dashboard e controle de usuários'
							link='https://rafaelmpardim-dashgo.vercel.app'
							thumbnailUrl={dashgoThumbnailImg}
						/>

						<Project
							id='02'
							title='Ignews'
							description='Plataforma de newsletter com autenticação e inscrição com pagamento via Stripe'
							link='https://rafaelmpardim-ignews.vercel.app'
							thumbnailUrl={ignewsThumbnailImg}
						/>

						<Project
							id='03'
							title='DtMoney'
							description='Dashboard de controle de lançamentos financeiros e acompanhamento de movimentações'
							link='https://rafaelmpardim-dtmoney.vercel.app'
							thumbnailUrl={dtmoneyThumbnailImg}
						/>
					</div>
				</section>

				<section
					className='gap-4 w-full max-w-[1240px] m-auto mt-8 px-6'
				>
					<h2
						className='text-lg font-bold uppercase'
					>
						Eventos
					</h2>

					<div
						className='
							flex flex-col gap-16 mt-8
							sm:grid sm:grid-cols-events
						'
					>
						<Project
							id={<GiSoccerBall className='text-yellow-500' size={32}/>}
							title='NLW Copa'
							company='@Rocketseat'
							description='Bolão descentralizado para acompanhar os jogos da Copa do Mundo de 2022'
							link='#'
						/>

						<Project
							id={<SiReact className='text-cyan-900' size={32}/>}
							title='Ignite Lab 03'
							company='@Rocketseat'
							description='Design System completo, do Figma ao React com documentação e testes via Storybook'
							link='https://rafaelmpardim.github.io/ignite-lab-03/'
						/>

						<Project
							id={<BsCreditCard size={32}/>}
							title='Explorer Lab 01'
							company='@Rocketseat'
							description='Manipulação da DOM com Vanila JavaScript, validando formulários e adaptando estilos'
							link='https://rafaelmpardim-rocketpay.vercel.app'
						/>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}
