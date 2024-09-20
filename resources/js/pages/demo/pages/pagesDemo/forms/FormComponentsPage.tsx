import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	InputDefault,
	SimpleSelect,
	CheckboxDefault,
	RadioButtonsDefault,
	SwitchComponent,
} from '@/pages/demo/componentsDemo'

export const FormComponentsPage = () => {
	return (
		<>
			<PageHeader title={String(t('Form components'))}>
				<p className="font-bold leading-tight">
					Form components play a crucial role in UX by providing a structured
					and visually appealing way for users to input and manage data.
				</p>
				<p className="text-sm mt-2">
					Their thoughtful design enhances beauty and functionality, making
					forms not only attractive but also easy to use. By using clear labels,
					responsive fields, and intuitive controls, these components streamline
					user interactions, ensuring that completing forms is straightforward
					and error-free. Their intuitive layout guides users seamlessly through
					data entry, improving the overall experience and efficiency of
					interacting with the application.
				</p>
			</PageHeader>

			<PageContent>
				<div className="space-y-10">
					<InputDefault />

					<div className="grid grid-cols-2 gap-10">
						<div className="col-span-2">
							<SimpleSelect />
						</div>

						<CheckboxDefault />
						<RadioButtonsDefault />
						<SwitchComponent />
					</div>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}
