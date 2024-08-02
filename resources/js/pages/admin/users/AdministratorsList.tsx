import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { AdministratorsList } from './components/AdministratorsList'
import { Button, Chip } from '@nextui-org/react'
import { Link } from '@inertiajs/react'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Administrators')}>
				<div className="flex justify-end">
					<Button
						color="primary"
						className="px-6"
						as={Link}
						href={route('dashboard.user.create')}
					>
						{t('New user')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<AdministratorsList />
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Administrators')) }} />
)

export default Page
