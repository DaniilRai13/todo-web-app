import dayjs from 'dayjs'
import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { generateId } from '../../config/generateId'
import { useModalActions, useModalValue } from '../../provider/ModalProvider'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ITaskFormProps } from './CreateTaskModal'

const useCreateTask = ({ reset }: { reset: UseFormReset<ITaskFormProps> }) => {
	const { isOpen } = useModalValue()
	const { setOpen } = useModalActions()
	const { user } = useTypedSelector(({ user }) => user)
	const { createTask } = useActions()

	const handleClose = () => {
		setOpen(false)
	}

	const onSubmit: SubmitHandler<ITaskFormProps> = (data) => {
		if (!user) return
		try {
			createTask({
				task: {
					...data,
					status: 'process',
					createdAt: JSON.stringify(new Date()),
					updatedAt: JSON.stringify(new Date()),
					uid: generateId()
				},
				userId: user.id
			})

			reset({
				title: '',
				description: '',
				priority: 'low',
				startDate: dayjs().format('YYYY-MM-DDTHH:mm'),
				endDate: dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm')
			})
		} catch (error: unknown) {
			console.error(error)
			throw new Error("Task dosn't be created")
		} finally {
			handleClose()
		}
	}

	return {
		onSubmit,
		handleClose,
		isOpen
	}
}

export default useCreateTask