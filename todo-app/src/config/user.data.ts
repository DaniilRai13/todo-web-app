interface ITask {
	id: string
	name: string
	status: 'process' | 'completed' | 'review' // Можно ограничить статусами
	startDate: string // Строка, содержащая дату и время (ISO 8601)
	endDate: string // Строка, содержащая дату и время (ISO 8601)
	priority: 'low' | 'medium' | 'high' // Можно использовать перечисление для приоритетов
	assignedTo: string
	description: string
	createdAt: string // Дата и время создания задачи
	updatedAt: string // Дата и время последнего обновления задачи
}

export interface IProfileData {
	id: string
	name: string | null
	img: string | null
	email: string | null
	createdAt: string | undefined
}

interface ITasksData {
	profile: IProfileData
	tasks: ITask[]
}

// export const userData: ITasksData = {
// 	profile: {
// 		name: 'Daniil',
// 		lastname: 'Rai',
// 		img: '',

// 	},
// 	tasks: [
// 		{
// 			id: '23hg22',
// 			name: 'Buy computer',
// 			status: 'process',
// 			startDate: '2024-12-01T10:00:00', // Дата и время начала
// 			endDate: '2024-12-15T18:00:00', // Дата и время окончания
// 			priority: 'high',
// 			assignedTo: 'Alice',
// 			description: 'Purchase a new laptop for the marketing team.',
// 			createdAt: '2024-12-01T09:00:00',
// 			updatedAt: '2024-12-05T12:00:00',
// 		},
// 		{
// 			id: '45jk34',
// 			name: 'Prepare presentation',
// 			status: 'completed',
// 			startDate: '2024-12-01T12:00:00',
// 			endDate: '2024-12-10T17:00:00',
// 			priority: 'medium',
// 			assignedTo: 'Bob',
// 			description: 'Prepare slides for the client presentation.',
// 			createdAt: '2024-12-01T11:00:00',
// 			updatedAt: '2024-12-09T15:00:00',
// 		},
// 		{
// 			id: '67lm56',
// 			name: 'Call customer',
// 			status: 'review',
// 			startDate: '2024-12-02T09:30:00',
// 			endDate: '2024-12-07T17:30:00',
// 			priority: 'low',
// 			assignedTo: 'Charlie',
// 			description: 'Follow up with the customer regarding the new feature.',
// 			createdAt: '2024-12-02T09:00:00',
// 			updatedAt: '2024-12-06T16:00:00',
// 		},
// 		{
// 			id: '89op78',
// 			name: 'Write documentation',
// 			status: 'process',
// 			startDate: '2024-12-05T08:00:00',
// 			endDate: '2024-12-20T20:00:00',
// 			priority: 'medium',
// 			assignedTo: 'David',
// 			description: 'Write technical documentation for the new API.',
// 			createdAt: '2024-12-05T07:00:00',
// 			updatedAt: '2024-12-08T10:00:00',
// 		},
// 		{
// 			id: '90qr90',
// 			name: 'Deploy project',
// 			status: 'completed',
// 			startDate: '2024-12-01T14:00:00',
// 			endDate: '2024-12-03T16:00:00',
// 			priority: 'high',
// 			assignedTo: 'Eve',
// 			description: 'Deploy the new version of the website to production.',
// 			createdAt: '2024-12-01T13:00:00',
// 			updatedAt: '2024-12-02T09:00:00',
// 		}
// 	]
// }