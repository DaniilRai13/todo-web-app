import { FC } from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogActions } from '@mui/material';
import Button from '../Button/Button';
import { ITask } from '../../config/user.data';
import { Controller, useForm } from 'react-hook-form';
import { useModalActions, useModalValue } from '../../provider/ModalProvider';
import Field from '../form/Field';
import { generateId } from '../../config/generateId';
import Select from '../Select';
import DateTimeRange from '../DateTimeRange/DateTimeRange';
import dayjs from 'dayjs';

type ITaskFormProps = Omit<ITask, 'createdAt' | 'updatedAt' | 'id' | 'status'>

const CreateTaskModal: FC = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<ITaskFormProps>({
    mode: 'onChange'
  })
  const { isOpen } = useModalValue()
  const { setOpen } = useModalActions()

  const priorityOprions = ['low', 'medium', 'high']

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: ITaskFormProps) => {
    console.log(data.startDate)
    console.log({
      ...data,
      status: 'process',
      createdAt: JSON.stringify(new Date()),
      updatedAt: JSON.stringify(new Date()),
      id: generateId()
    })
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          {...register('title',
            {
              required: 'This field is required!'
            }
          )}
          placeholder='Title'
          error={errors.title}
        />
        <Field
          {...register('description')}
          placeholder='Description'
          error={errors.description}
        />
        <Controller
          name='priority'
          control={control}
          defaultValue='low'
          render={({ field }) => <Select
            title='Priority'
            options={priorityOprions}
            changeOptionValue={(option) => field.onChange(option)}
          />}
        />
        <div>
          <Controller
            name='startDate'
            control={control}
            defaultValue={dayjs().format('YYYY-MM-DDTHH:mm')}
            render={({ field }) => <DateTimeRange
              currentValue={field.value}
              title='Start of task'
              changeTimeValue={(time) => field.onChange(time)}
            />}
          />
          <Controller
            name='endDate'
            control={control}
            defaultValue={dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm')}
            render={({ field }) => <DateTimeRange
              currentValue={field.value}
              title='End of Task'
              changeTimeValue={(time) => field.onChange(time)}
            />}
          />
        </div>
        <DialogActions>
          <Button title='Cancel' onClick={handleClose} />
          <Button type="submit" title='Create' />
        </DialogActions>
      </form>
    </Dialog >
  )
}

export default CreateTaskModal
