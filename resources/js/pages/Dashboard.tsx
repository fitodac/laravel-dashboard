import { Layout } from '@/layouts/user/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'

const pageTitle = 'Dashboard'

type Props = {
	total_accounts: number
	total_users: number
	total_admins: number
}

const Page = ({ total_accounts, total_users, total_admins }: Props) => {
	return (
		<>
			<PageHeader title={t(pageTitle)} />

			<PageContent>
				<div className="space-y-4">
					<p>Total de cuentas creadas {total_accounts}</p>
					<p>Total usuarios {total_users}</p>
					<p>Total administradores {total_admins}</p>
				</div>

				{/* <div className="bg-gray-100 w-screen min-h-svh dark:bg-gray-900">
					<div className="max-w-5xl py-20 mx-auto">
						<div className="grid grid-cols-2 gap-x-20">
							<div>
								<Link
									href={route('dashboard.corporate')}
									className="space-y-6 leading-tight"
								>
									<div className="aspect-video rounded-lg">
										<Image
											src="https://cdn.dribbble.com/userupload/9049378/file/original-a8fa61bd744f8859db6d5b4fe01fb64c.png?resize=800x600"
											width={400}
											height={270}
										/>
									</div>

									<div className="space-y-1">
										<h3 className="font-bold">Corporate</h3>
										<p className="text-sm">
											The most popular layout with a sidebar menu section and
											all the flavor.
										</p>
									</div>
								</Link>
							</div>

							<div>
								<Link
									href={route('dashboard.executive')}
									className="space-y-6 leading-tight"
								>
									<div className="aspect-video rounded-lg">
										<Image
											src="https://cdn.dribbble.com/userupload/14088455/file/original-3ea823a2c37b9766c4107d1814f601b1.png?resize=800x600"
											width={400}
											height={270}
										/>
									</div>

									<div className="space-y-1">
										<h3 className="font-bold">Executive</h3>
										<p className="text-sm">
											The most popular layout with a sidebar menu section and
											all the flavor.
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div> */}
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: t(pageTitle).toString() }} />
)

export default Page
