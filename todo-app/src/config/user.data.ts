export interface ITask {
	uid: string
	title: string
	status: 'process' | 'completed' | 'pending'
	startDate: string
	endDate: string
	priority: 'low' | 'medium' | 'high'
	description: string
	createdAt: string
	updatedAt: string
}

export interface IProfileData {
	id: string
	username: string | null
	img: string | null
	email: string
	createdAt: string
}