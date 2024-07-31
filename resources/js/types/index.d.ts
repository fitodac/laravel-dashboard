import { Config } from 'ziggy-js'

export interface User {
	id: number
	name: string
	email: string
	email_verified_at: string
	address: string
	bio: string
	birth_date: string
	city: string
	company: string
	country: string
	job_title: string
	lastname: string
	phone: string
	profile_picture: string
	username: string
	zip: string
}

export interface Users {
	current_page: number
	data: User[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string
	to: number
	total: number
	links: {
		url: string
		label: string
		active: boolean
	}[]
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>
> = T & {
	auth: {
		user: User
	}
	ziggy: Config & { location: string }
}
