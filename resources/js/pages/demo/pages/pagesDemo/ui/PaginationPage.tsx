import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const PaginationPage = () => {
	return (
		<>
			<PageHeader title={t('Pagination')}>
				<p className="font-bold leading-tight">
					Navigate Large Datasets with User-Friendly Pagination
				</p>
				<p className="text-sm mt-2">
					Pagination is a crucial UI component for dividing large datasets or
					content into manageable sections across multiple pages. It enhances
					user experience by allowing easy navigation through extensive
					information, reducing load times, and improving the overall layout.
					With pagination, users can quickly access specific data while keeping
					the interface clean and organized.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ButtonsNavbar
						{...{
							menu: [
								// { key: 'solidButton', label: 'Solid button' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-14"></div>
			</PageContent>
		</>
	)
}