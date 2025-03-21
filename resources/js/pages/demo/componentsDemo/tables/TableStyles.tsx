import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
} from '@heroui/table'

const columns = [
	{ key: 'name', label: 'Name' },
	{ key: 'role', label: 'Role' },
	{ key: 'status', label: 'Status' },
]

const data = [
	{ name: 'Tony Reichert', role: 'CEO', status: 'Active' },
	{ name: 'Zoey Lang', role: 'Technical lead', status: 'Paused' },
	{ name: 'Jane Fisher', role: 'Senior developer', status: 'Active' },
	{ name: 'William Howard', role: 'Community manager', status: 'Vacation' },
]

export const BasicTable = () => (
	<>
		<div className="space-y-6" id="basicTable">
			<h3 className="font-semibold">Basic table</h3>

			<Table
				shadow="none"
				aria-label="Table"
				classNames={{
					th: 'text-base',
					td: 'text-base',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const StripedTable = () => (
	<>
		<div className="space-y-6" id="stripedTable">
			<h3 className="font-semibold">Striped table</h3>

			<Table
				isStriped
				shadow="none"
				// radius="none"
				aria-label="Table"
				classNames={{
					th: 'bg-transparent text-base',
					td: 'text-base',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const ShadowedTable = () => (
	<>
		<div className="space-y-6" id="shadowedTable">
			<h3 className="font-semibold">Shadowed table</h3>

			<Table
				// removeWrapper
				shadow="md"
				// radius="none"
				aria-label="Table"
				classNames={{
					th: 'bg-transparent text-base',
					td: 'text-base',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const SharpTable = () => (
	<>
		<div className="space-y-6" id="sharpTable">
			<h3 className="font-semibold">Sharp table</h3>

			<Table
				// removeWrapper
				shadow="none"
				radius="none"
				aria-label="Table"
				classNames={{
					th: 'text-base [&]:first:rounded-none [&]:last:rounded-none',
					td: 'text-base',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const SharpStripedTable = () => (
	<>
		<div className="space-y-6" id="sharpStripedTable">
			<h3 className="font-semibold">Sharp striped table</h3>

			<Table
				isStriped
				shadow="none"
				radius="none"
				aria-label="Table"
				classNames={{
					th: 'text-base [&]:first:rounded-none [&]:last:rounded-none',
					td: 'text-base [&]:before:first:rounded-none [&]:before:last:rounded-none',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const BorderlessTable = () => (
	<>
		<div className="space-y-6" id="borderlessTable">
			<h3 className="font-semibold">Borderless table</h3>

			<Table
				removeWrapper
				radius="none"
				aria-label="Table"
				classNames={{
					th: 'bg-transparent text-base [&]:first:rounded-none [&]:last:rounded-none',
					td: 'text-base [&]:before:first:rounded-none [&]:before:last:rounded-none',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const ClassicTable = () => (
	<>
		<div className="space-y-6" id="classicTable">
			<h3 className="font-semibold">Classic table</h3>

			<Table
				removeWrapper
				radius="none"
				aria-label="Table"
				classNames={{
					th: 'bg-content1 border border-content2 text-base [&]:first:rounded-none [&]:last:rounded-none',
					td: 'border border-content2 text-base',
					tbody: 'bg-content1',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const DividersTable = () => (
	<>
		<div className="space-y-6" id="dividersTable">
			<h3 className="font-semibold">Dividers table</h3>

			<Table
				removeWrapper
				aria-label="Table"
				classNames={{
					th: 'text-base [&]:first:rounded-none [&]:last:rounded-none',
					td: 'text-base border-t border-content3',
				}}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)

export const CompactTable = () => (
	<>
		<div className="space-y-6" id="compactTable">
			<h3 className="font-semibold">Compact table</h3>

			<Table shadow="none" aria-label="Table" isCompact>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>

				<TableBody items={data}>
					{(item) => (
						<TableRow key={crypto.randomUUID()}>
							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<p className="text-xs leading-tight">
				The basic table is a simple, minimalist table design without visible
				separations between rows or columns. This clean layout focuses solely on
				the data presented, eliminating visual distractions. It's ideal for
				interfaces where simplicity and clarity are key, seamlessly integrating
				into any design without overwhelming the user.
			</p>
		</div>
	</>
)
