import dayjs from 'dayjs';
import { ITask } from '../config/user.data';

export const handleTaskStatus = {
	inProcess: (data: ITask[]): number => {
		return data.filter((item) => item.status === 'process').length
	},
	inPending: (data: ITask[]): number => {
		return data.filter((item) => item.status === 'pending').length
	},
	completed: (data: ITask[]) => {
		return data.filter((item) => item.status === 'completed').length
	},
	expired: (data: ITask[]) => {
		const currentDate = dayjs().format('YYYY-MM-DDTHH:mm')
		return data.filter((item) => {
			const endDate = dayjs(item.endDate);

			if (item.status === 'completed') return

			if (endDate.isBefore(currentDate)) {
				return item
			}
		}).length
	}
}