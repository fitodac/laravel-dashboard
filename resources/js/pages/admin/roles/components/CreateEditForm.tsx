import { useContext, useRef } from 'react'
import {
	Button,
	CheckboxGroup,
	Checkbox,
	Divider,
	cn,
	Spinner,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { RoleContext } from '../providers/RoleProvider'
import { ClassicInput } from '@/components/form'
import { useActions } from '../hooks/useActions'
import { usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'
import type { Role, RoleContextProps } from '@/types/roles'

export const CreateEditForm = () => {
	const { state, dispatch } = useContext(RoleContext) as RoleContextProps

	const {
		props: { protected_roles, permissions },
	} = usePage<PageProps>()

	console.log(permissions)

	const undeletableRoles = protected_roles as string[]

	const isProtected = useRef(
		(state.selectedRole &&
			undeletableRoles.includes(state.selectedRole.name)) ??
			false
	)

	const {
		data,
		post,
		patch,
		errors,
		setData,
		processing,
		clearErrors,
		reset,
		inputName,
		submit,
	} = useActions()

	return (
		<div
			className={cn(
				'bg-background border border-divider border-b-none h-full relative overflow-hidden',
				'w-full flex justify-center items-center'
			)}
		>
			<div className="p-6 lg:px-10">
				<div className="text-lg">
					{state.selectedRole ? t('Edit role') : t('New role')}
				</div>
				<Divider className="my-4" />

				<form onSubmit={submit} className="pb-10 space-y-5">
					<fieldset>
						<ClassicInput
							isRequired
							ref={inputName}
							variant="faded"
							value={data.name}
							label={t('Role name')}
							isInvalid={errors.name ? true : false}
							errorMessage={errors.name}
							onKeyUp={() => clearErrors('name')}
							isDisabled={isProtected.current || processing}
							onValueChange={(e) => setData('name', e)}
						/>
					</fieldset>

					{/* <fieldset className="space-y-6">
						{permissions &&
							Object.keys(permissions).map((key) => (
								<div key={key}>
									<CheckboxGroup
										label={`${key} ${t('guards')}`}
										size="sm"
										value={data.permissions}
										isDisabled={processing}
										onValueChange={(val) => {
											setData('permissions', val)
										}}
										classNames={{
											label: 'text-foreground text-sm font-medium capitalize',
										}}
									>
										{data.permissions[key].map((e: Role) => (
											<div key={e.name} className="flex items-center gap-3">
												<Checkbox key={e.name} value={e.name} className="py-3">
													{e.name}
												</Checkbox>
											</div>
										))}
									</CheckboxGroup>
								</div>
							))}
					</fieldset> */}

					<div className="flex justify-end gap-5">
						<pre>{JSON.stringify(permissions, null, 2)}</pre>

						<Button
							isDisabled={processing}
							onPress={() => {
								dispatch({ type: 'closeDrawer' })
								dispatch({ type: 'setSelectedRole', payload: null })
								reset()
							}}
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

			{processing && (
				<div className="bg-white/70 inset-0 absolute grid place-content-center z-30 dark:bg-black/80">
					<Spinner />
				</div>
			)}
		</div>
	)
}
