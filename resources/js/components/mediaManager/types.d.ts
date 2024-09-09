export type Image = {
	id: number
	model_type: string
	model_id: number
	uuid: string
	collection_name: string
	name: string
	file_name: string
	mime_type: string
	disk: string
	conversions_disk: string
	size: number
	manipulations: any
	custom_properties: {
		altText?: string
		caption?: string
		description?: string
	}
	generated_conversions: any
	responsive_images: any
	order_column: number
	original_url: string
	preview_url: string
	created_at: string
	updated_at: string
}

export type State = {
	files?: Image[] | any
	filesTotal?: number
	fileSelected?: Image | null
	tabsDisabled?: string[]
	selectedTab?: string
	selectMultiple?: boolean
	collection?: Image[] | null | undefined
}

export type Action = {
	setFiles?: (images: State['files']) => void
	setFilesTotal?: (total: State['filesTotal']) => void
	setFileSelected?: (image: State['fileSelected']) => void
	disableTabs?: () => void
	enableTabs?: () => void
	setSelectedTab?: (tab: State['selectedTab']) => void
	setSelectMultiple?: (value: State['selectMultiple']) => void
	setCollection?: (collection: State['collection']) => void
}

export interface MediaManagerContext {
	mediaGallery?: Image[] | null
	setMediaGallery?: (images: Image[]) => void
	selectedImage?: Image | null
	setSelectedImage?: (image: Image | null) => void
	csrfToken?: string
	setCsrfToken?: (token: string) => void
}
