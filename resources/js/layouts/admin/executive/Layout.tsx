import { type PropsWithChildren, useEffect } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useMainStore } from '@/store'
import { useWindowWidth } from '@/hooks'
import { Header, Sidebar } from './components'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const Layout = ({ children, pageTitle }: Props) => {
	const { sidebarOpen, setSidebarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	useEffect(() => {
		if (windowWidth > 768 && !sidebarOpen) {
			setSidebarOpen(true)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background min-h-screen">
				<Header />

				<div className="flex justify-center min-h-svh">
					{/* <NavbarMobile /> */}

					<div className="max-w-screen-xl flex-1">{children}</div>
				</div>
			</main>
		</>
	)
}
