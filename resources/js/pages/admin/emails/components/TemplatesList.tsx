import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Spinner,
} from '@heroui/react'
import { t } from '@/i18n'
import { usePage } from '@inertiajs/react'
import { NotificationsListCell, NotificationsListPager } from './list'

import type { PageProps } from '@/types'
import type {
	EmailTemplate,
	EmailTemplateTable,
} from '@/types/notification-templates.d'

export const TemplatesList = () => {
	const {
		props: { templates },
	} = usePage<PageProps>()

	const { links, current_page, data } = templates as EmailTemplateTable

	return (
		<>
			<Table
				removeWrapper
				aria-label="Table"
				classNames={{
					th: '[&]:first:rounded-none [&]:last:rounded-none [&]:last:text-right',
					td: 'border-t border-content3',
				}}
				selectionMode="single"
				bottomContent={<NotificationsListPager {...{ links, current_page }} />}
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
				>
					{(item: EmailTemplate) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{NotificationsListCell({
										...{ item, key: String(key) },
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</>
	)
}

const columns = [
	{ key: 'id', label: '#', allowsSorting: true, width: 70 },
	{ key: 'name', label: t('Name'), allowsSorting: true },
	{ key: 'actions', label: t('Actions') },
] as {
	key: string
	label: string
	allowsSorting?: boolean
	width: number | null
}[]
