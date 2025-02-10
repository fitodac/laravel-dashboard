import { useContext, useEffect } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Spinner,
} from '@heroui/react'
import { useTableSorting } from '@/components/table/hooks/useTableUtilities'
import { t } from '@/i18n'
import { usePage } from '@inertiajs/react'
import { NotificationsListCell, NotificationsListPager } from './list'
import { DeleteNotification } from './DeleteNotification'
import { NotificationContext } from '../providers/NotificationProvider'

import type { PageProps } from '@/types'
import type {
	Notification,
	NotificationsTable,
	NotificationContextProps,
} from '@/types/notifications'

export const NotificationsList = () => {
	const {
		props: { notifications },
	} = usePage<PageProps>()

	const { links, current_page, data } = notifications as NotificationsTable

	if (!data.length)
		return (
			<div className="text-foreground-400 text-center py-10 flex-1">
				{t('There are no notifications')}
			</div>
		)

	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	const sort = useTableSorting()

	useEffect(() => {
		if (data) dispatch({ type: 'setListLoading', payload: false })
	}, [data])

	return (
		<>
			<Table
				removeWrapper
				aria-label="Table"
				classNames={{
					th: '[&]:first:rounded-none [&]:last:rounded-none [&]:last:text-right',
					td: 'border-t border-content3',
				}}
				bottomContent={<NotificationsListPager {...{ links, current_page }} />}
				onSortChange={(sortDescriptor) => {
					const sd = sort({ sortDescriptor, only: ['notifications'] })
					dispatch({ type: 'setSortDescriptor', payload: sd })
					dispatch({ type: 'setListLoading', payload: true })
				}}
				sortDescriptor={state.sortDescriptor}
				hideHeader
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn
							key={column.key}
							allowsSorting={column.allowsSorting ?? false}
							width={column.width ?? null}
						>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>

				<TableBody
					items={data}
					loadingContent={
						<div className="bg-white/80 inset-0 absolute grid place-content-center z-10 dark:bg-black/80">
							<Spinner label={t('loading').toString()} />
						</div>
					}
					isLoading={state.listLoading}
				>
					{(item: Notification) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{NotificationsListCell({
										...{ item, key: String(key), dispatch },
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<DeleteNotification />
		</>
	)
}

const columns = [{ key: 'notification', label: '', allowsSorting: true }] as {
	key: string
	label: string
	allowsSorting?: boolean
	width: number | null
}[]
