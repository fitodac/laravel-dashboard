import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	CardsBasic,
	CardBasicHeader,
	CardBasicFooter,
	CardBasicDivider,
	CardRadius,
	CardShadow,
	CardImage,
	CardNotifications,
	CardActions,
	CardExtraFeatures,
} from '@/pages/demo/componentsDemo'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Cards')}>
				<p className="text-lg font-medium leading-tight">
					Cards are versatile UI components that present information in a
					concise and visually appealing format.
				</p>
				<p className="text-sm mt-2">
					Each card is designed to be compact yet comprehensive, providing a
					snapshot of key details at a glance. The use of varied sizes allows
					for highlighting the most relevant information, ensuring that users
					can quickly identify important content.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				}
			>
				<div className="max-w-lg space-y-14">
					<CardsBasic />
					<CardBasicHeader />
					<CardBasicFooter />
					<CardBasicDivider />
					<CardRadius />
					<CardShadow />
					<CardImage />
					<CardNotifications />
					<CardActions />
					<CardExtraFeatures />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Cards')) }} />
)

export default Page
