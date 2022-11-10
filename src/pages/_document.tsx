import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

				<link href="https://fonts.googleapis.com/css2?family=Saira:wght@100;400;500;700&display=swap" rel="stylesheet" />

				<link rel="shortcut icon" href="favicon.png" type="image/png" sizes='32x32'/>
			</Head>
			<body	className='bg-black text-gray-100'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}