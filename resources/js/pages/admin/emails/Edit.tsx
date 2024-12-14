import { Layout } from '@/layouts/admin/Layout'
import { PageHeader, PageContent } from '@/components'
import { useActions } from './hooks/useActions'
import { Input, Button } from '@nextui-org/react'
import { t } from '@/i18n'
import { ErrorMessage, Wysiwyg } from '@/components/form'
import { Link } from '@inertiajs/react'
import 'react-modern-drawer/dist/index.css'

import type { EmailTemplate } from '@/types/notification-templates'

const pageTitle = String(t('Edit email template'))

interface Props {
	template: EmailTemplate
}

const Page = ({ template }: Props) => {
	const { data, errors, setData, processing, clearErrors, inputName, submit } =
		useActions()

	return (
		<>
			<PageHeader title={pageTitle} />

			<PageContent>
				<div className="space-y-8 flex-1">
					<h3 className="text-xl">{template.name}</h3>

					<form onSubmit={submit} className="space-y-10">
						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Subject')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								variant="faded"
								ref={inputName}
								value={data.subject}
								isInvalid={errors.subject ? true : false}
								errorMessage={errors.subject}
								onKeyUp={() => clearErrors('subject')}
								isDisabled={processing}
								onValueChange={(val) => setData('subject', val)}
							/>
						</fieldset>

						{data.body && (
							<fieldset className="space-y-1">
								<div className="flex-1 w-full space-y-14">
									<Wysiwyg
										{...{
											headings: true,
											alignment: true,
											codeBlock: true,
											initialContent: String(data.body),
											onUpdate: (val) => setData('body', val),
										}}
									/>
								</div>

								<ErrorMessage {...{ error: errors.body }} />
							</fieldset>
						)}

						<div className="flex justify-end gap-5">
							<Button
								isDisabled={processing}
								as={Link}
								href={route('admin.emailTemplates.index')}
								className="w-32"
							>
								{t('Cancel')}
							</Button>

							<Button
								type="submit"
								color="primary"
								className="w-32"
								isLoading={processing}
							>
								{t('Save')}
							</Button>
						</div>
					</form>
				</div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle }} />
)

export default Page