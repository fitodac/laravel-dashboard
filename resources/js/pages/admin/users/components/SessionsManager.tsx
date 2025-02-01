import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import dayjs from 'dayjs'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'

import type {
	Sessions as SessionsProps,
	PageProps,
	InertiaResponse,
	FlashMessage,
} from '@/types'

import { toast } from 'react-toastify'

export const SessionsManager = () => {
	const { sessions } = usePage<PageProps>().props

	const { delete: destroy } = useForm()

	const invalidateSession = (id: string) => {
		destroy(route('dashboard.session.invalidate', { id }), {
			only: ['sessions'],
			preserveScroll: true,
			onSuccess: (resp) => {
				const flash = resp.props.flash as FlashMessage
				if (flash.success) toast.success(t(flash.success))
				if (flash.error) toast.error(t(flash.error))
			},
			onError: (error) => console.log('error', error),
		})
	}

	if (!sessions.length) return <></>

	return (
		<>
			<Card shadow="none">
				<CardHeader className="px-8 pt-5">{t('Sessions')}</CardHeader>

				<CardBody className="space-y-3 py-1 pl-8 pr-6">
					{sessions.map(({ id, ip_address, last_activity }) => (
						<div key={id} className="flex gap-5 justify-between items-center">
							<div className="text-sm font-light space-x-3">
								<i className="ri-mac-line ri-xl" />
								<span>{ip_address}</span>
							</div>

							<div className="space-x-4">
								<span className="text-sm text-foreground-500">
									{dayjs(last_activity).format('YYYY-MM-DD')}
								</span>

								<Button
									isIconOnly
									color="danger"
									size="sm"
									radius="lg"
									variant="light"
									onPress={() => invalidateSession(id)}
								>
									<i className="ri-delete-bin-2-line ri-xl" />
								</Button>
							</div>
						</div>
					))}
				</CardBody>
				<CardFooter />
			</Card>
		</>
	)
}
