import { useCallback, useEffect, useState } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Pagination,
	Avatar,
	Button,
	Badge,
	type SortDescriptor,
	Chip,
	cn,
	Spinner,
} from '@heroui/react'
import { t } from '@/i18n'
import { Link, router, usePage } from '@inertiajs/react'
import type { PageProps, User, Users } from '@/types'

import userBlank from '@/assets/img/blank-462x265.webp'

export const UsersList = () => {
	const { users, total } = usePage<PageProps>().props

	const { links, current_page } = users

	const renderCell = useCallback(
		(user: User, columnKey: string) =>
			({
				id: <>{user.id}</>,
				username: (
					<>
						<div className="flex gap-x-3 items-center">
							<Avatar
								src={
									user.profile_picture
										? `/storage/img/users/avatars/${user.profile_picture}`
										: userBlank
								}
								name={
									user.name && user.lastname
										? user.name[0] + ' ' + user.lastname[0]
										: t('Name not provided').toString()
								}
								radius="full"
								isBordered={user.sessions?.length ? true : false}
								color={user.sessions?.length ? 'success' : 'default'}
							/>

							{user.username}
						</div>
					</>
				),
				name:
					user.name && user.lastname ? (
						<div className="truncate text-ellipsis max-w-28">{`${user.name} ${user.lastname}`}</div>
					) : (
						<div className="text-xs text-foreground-500 font-medium">
							{t('Not provided')}
						</div>
					),
				company: user.company ? (
					<div className="truncate text-ellipsis max-w-28">{user.company}</div>
				) : (
					<div className="text-xs text-foreground-500 font-medium">
						{t('Not provided')}
					</div>
				),
				status: (
					<>
						<Chip
							size="sm"
							color={user.status === 'enabled' ? 'success' : 'danger'}
							variant="dot"
						>
							{user.status}
						</Chip>
					</>
				),
				sessions: (
					<>
						<Chip
							size="sm"
							color={user.sessions?.length ? 'success' : 'default'}
							variant="flat"
							className={cn(!user.sessions?.length && 'text-opacity-60')}
						>
							{user.sessions?.length ? 'Active' : 'Inactive'}
						</Chip>
					</>
				),
				actions: (
					<div className="flex justify-end">
						<div className="space-x-2">
							<Button
								size="sm"
								color="primary"
								variant="flat"
								as={Link}
								href={route('admin.user.edit', { user })}
							>
								{t('Edit')}
							</Button>
						</div>
					</div>
				),
			}[columnKey]),
		[]
	)

	return (
		<>
			{users && (
				<Table
					removeWrapper
					aria-label="Table"
					classNames={{
						th: '[&]:first:rounded-none [&]:last:rounded-none',
						td: 'border-t border-content3',
					}}
					selectionMode="single"
					bottomContent={
						<div className="flex justify-between items-center">
							<div className="text-sm flex-1">
								<span className="whitespace-nowrap">
									{t('Total users: %', { total })}
								</span>
							</div>

							{links && (
								<div className="flex w-full justify-end">
									<Pagination
										size="sm"
										isCompact
										showControls
										showShadow
										variant="light"
										color="primary"
										page={current_page}
										total={links.length - 2 || 0}
										classNames={{ wrapper: 'shadow-none' }}
										onChange={(page) =>
											router.reload({
												data: { page },
												only: ['users'],
											})
										}
									/>
								</div>
							)}
						</div>
					}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn
								key={column.key}
								allowsSorting={column.allowsSorting ?? false}
								// width={column.width ?? 1}
							>
								{column.label}
							</TableColumn>
						)}
					</TableHeader>

					<TableBody
						items={users.data}
						loadingContent={<Spinner label={t('loading').toString()} />}
						// isLoading={isLoading}
					>
						{(item: User) => (
							<TableRow key={item.id}>
								{(key) => (
									<TableCell>{renderCell(item, String(key))}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			)}
		</>
	)
}

const columns = [
	{ key: 'id', label: '#', width: 70 },
	{ key: 'username', label: t('Username'), width: 150 },
	{ key: 'name', label: t('Name'), width: 150 },
	{ key: 'company', label: t('Company') },
	{ key: 'status', label: t('Status') },
	{ key: 'sessions', label: t('Sessions') },
	{ key: 'actions', label: '', width: 70 },
] as { key: string; label: string; allowsSorting?: boolean }[]
