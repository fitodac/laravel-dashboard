import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Input, Button, Textarea, Divider } from '@heroui/react'
import { toast } from 'react-toastify'

import type { PageProps, FlashMessage } from '@/types'

export const FormProfessionalInformation = () => {
	const { user } = usePage<PageProps>().props

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			id: user.id,
			job_title: user.job_title,
			company: user.company,
			bio: user.bio,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('admin.user.update', { user }), {
			preserveScroll: true,
			onSuccess: (resp) => {
				const flash = resp.props.flash as FlashMessage
				if (flash.success) toast.success(t(flash.success))
				if (flash.error) toast.error(t(flash.error))
			},
			onError: (errors) => console.log(errors),
		})
	}

	return (
		<>
			<form onSubmit={submit}>
				<section className="space-y-5">
					<div className="font-medium flex gap-5 items-center">
						{t('Professional information')}
						<Divider className="flex-1" />
					</div>

					<div className="grid grid-cols-2 gap-x-6 gap-y-5">
						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Job title')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								variant="faded"
								value={data.job_title}
								isInvalid={errors.job_title ? true : false}
								errorMessage={errors.job_title && String(t(errors.job_title))}
								onKeyUp={() => clearErrors('job_title')}
								isDisabled={processing}
								onValueChange={(e) => setData('job_title', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Company')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								variant="faded"
								value={data.company}
								isInvalid={errors.company ? true : false}
								errorMessage={errors.company}
								onKeyUp={() => clearErrors('company')}
								isDisabled={processing}
								onValueChange={(e) => setData('company', e)}
							/>
						</fieldset>

						<fieldset className="col-span-2 space-y-1">
							<Textarea
								label={t('Biography')}
								variant="faded"
								value={data.bio}
								isInvalid={errors.bio ? true : false}
								errorMessage={errors.bio}
								onKeyUp={() => clearErrors('bio')}
								isDisabled={processing}
								onValueChange={(e) => setData('bio', e)}
							></Textarea>
						</fieldset>
					</div>

					<div className="pt-5 flex justify-end">
						<Button
							type="submit"
							color="primary"
							className="w-40"
							isLoading={processing}
							isDisabled={!isDirty}
						>
							{t('Save')}
						</Button>
					</div>
				</section>
			</form>
		</>
	)
}
