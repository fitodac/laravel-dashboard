import { Layout } from '@/layouts/admin/corporate/Layout'
import {
	TablesPage,
	TableStylesPage,
} from '@/pages/demo/pages/pagesDemo/tables'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Tables styles':
			return <TableStylesPage />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page