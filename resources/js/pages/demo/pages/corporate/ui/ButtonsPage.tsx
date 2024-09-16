import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	SolidButton,
	ButtonSize,
	ButtonVariants,
	LightButton,
	LoadingButton,
	IconizedButtons,
	ButtonVariantsRounded,
	GroupedButtons,
} from '@/pages/demo/componentsDemo'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Buttons')}>
				<p className="text-lg font-medium leading-tight">
					Beautifully designed buttons that enhance visual appeal and usability.
				</p>
				<p className="text-sm mt-2">
					Each button is intuitive and responsive, providing efficient access to
					key functions. These buttons offer a perfect blend of aesthetics and
					practicality, ensuring a seamless user experience.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ul>
						<li>Solid button</li>
						<li>Small button</li>
						<li>Large button</li>
					</ul>
				}
			>
				<div className="flex-1 max-w-xl space-y-14">
					<SolidButton />
					<ButtonSize title="Small buttons" />
					<ButtonSize title="Large buttons" size="lg" />
					<ButtonVariants />
					<LightButton />
					<LoadingButton />
					<IconizedButtons />
					<ButtonVariantsRounded />
					<GroupedButtons />
				</div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Buttons')) }} />
)

export default Page
