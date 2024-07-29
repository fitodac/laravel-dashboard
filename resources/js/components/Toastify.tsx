import { ToastContainer } from 'react-toastify'
import { useMainStore } from '@/store'

export const Toastify = (): JSX.Element => {
	const { colorMode } = useMainStore()

	return (
		<ToastContainer
			position="bottom-right"
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={colorMode}
		/>
	)
}
