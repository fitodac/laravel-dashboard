import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Input, Button, Divider, Chip } from '@nextui-org/react'
import { toast } from 'react-toastify'
import { FormProfileImage } from './FormProfileImage'

import type { PageProps, InertiaResponse } from '@/types'

export const FormBasicInformation = () => {
	const { user } = usePage<PageProps>().props

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			id: user.id,
			name: user.name,
			lastname: user.lastname,
			username: user.username,
			email: user.email,
			basic_information: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('admin.user.update', { user }), {
			preserveScroll: true,
			// @ts-ignore
			onSuccess: (resp: InertiaResponse) => {
				if (resp.props.flash && resp.props.flash.success) {
					toast.success(t(resp.props.flash.success))
				}
			},
			onError: (errors) => console.log(errors),
		})
	}

	return (
		<>
			<form onSubmit={submit}>
				<section className="space-y-5">
					<div className="font-medium flex gap-5 items-center">
						{t('Basic information')}
						<Divider className="flex-1" />
					</div>

					<FormProfileImage />

					<div className="flex gap-4 pt-3">
						<div className="flex items-center gap-3">
							<span className="text-foreground-500 text-xs">{t('Role')}</span>
							<Chip
								size="sm"
								color="primary"
								variant="flat"
								className="h-5 px-1.5"
							>
								{user.role}
							</Chip>
						</div>

						<Divider orientation="vertical" className="h-8" />

						<div className="flex items-center gap-3">
							<span className="text-foreground-500 text-xs">{t('Status')}</span>
							<span>
								<Chip
									size="sm"
									variant="dot"
									color={user.status === 'enabled' ? 'success' : 'danger'}
								>
									{user.status}
								</Chip>
							</span>
						</div>
					</div>

					<div className="grid gap-x-6 gap-y-5 lg:grid-cols-2">
						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Name')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.name}
								isInvalid={errors.name ? true : false}
								errorMessage={errors.name}
								onKeyUp={() => clearErrors('name')}
								isDisabled={processing}
								onValueChange={(e) => setData('name', e)}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Lastname')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.lastname}
								isInvalid={errors.lastname ? true : false}
								errorMessage={errors.lastname}
								onKeyUp={() => clearErrors('lastname')}
								isDisabled={processing}
								onValueChange={(e) => setData('lastname', e)}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Username')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.username}
								isInvalid={errors.username ? true : false}
								errorMessage={errors.username}
								onKeyUp={() => clearErrors('username')}
								isDisabled={processing}
								onValueChange={(e) => setData('username', e)}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Email')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.email}
								isInvalid={errors.email ? true : false}
								errorMessage={errors.email}
								onKeyUp={() => clearErrors('email')}
								isDisabled={processing}
								onValueChange={(e) => setData('email', e)}
							/>
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
