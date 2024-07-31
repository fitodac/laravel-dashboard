import { Card, CardBody, CardHeader } from '@nextui-org/react'

export const CardNotifications = () => {
	return (
		<>
			<h3>Using cards for notifications</h3>

			<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
				<div>
					<Card shadow="none" className="bg-warning-50 text-warning-500 pl-12">
						<i className="ri-error-warning-fill ri-2x left-3 top-1 absolute" />
						<CardHeader className="pb-0">Warning</CardHeader>
						<CardBody className="text-sm font-light pt-0">
							Bandwidth limit exceeded
						</CardBody>
					</Card>
				</div>

				<div>
					<Card shadow="none" className="bg-success-50 text-success-500 pl-12">
						<i className="ri-check-line ri-2x left-3 top-1 absolute" />
						<CardHeader className="pb-0">Success</CardHeader>
						<CardBody className="text-sm font-light pt-0">
							The page has been added
						</CardBody>
					</Card>
				</div>

				<div>
					<Card shadow="none" className="bg-danger-50 text-danger-500 pl-12">
						<i className="ri-file-close-line ri-2x left-3 top-1 absolute" />
						<CardHeader className="pb-0">Danger</CardHeader>
						<CardBody className="text-sm font-light pt-0">
							The daily report has failed
						</CardBody>
					</Card>
				</div>

				<div>
					<Card shadow="none" className="bg-primary-50 text-primary-500 pl-12">
						<i className="ri-message-2-fill ri-2x left-3 top-1 absolute" />
						<CardHeader className="pb-0">Info</CardHeader>
						<CardBody className="text-sm font-light pt-0">
							You have 98 messages
						</CardBody>
					</Card>
				</div>
			</div>
		</>
	)
}