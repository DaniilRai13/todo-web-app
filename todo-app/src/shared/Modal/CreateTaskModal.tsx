import { FC } from 'react'

import { DialogActions } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import dayjs from 'dayjs'

import { Controller, useForm } from 'react-hook-form'
import { ITask } from '../../config/user.data'
import Button from '../Button/Button'
import DateTimeRange from '../DateTimeRange/DateTimeRange'
import Field from '../form/Field'
import Select from '../Select'
import styles from './CreateTaskModal.module.scss'
import useCreateTask from './useCreateTask'

export type ITaskFormProps = Omit<ITask, 'createdAt' | 'updatedAt' | 'id' | 'status'>

const CreateTaskModal: FC = () => {
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<ITaskFormProps>({
    mode: 'onChange'
  })

  const { onSubmit, isOpen, handleClose } = useCreateTask({ reset })

  const priorityOptions = ['low', 'medium', 'high']

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className={styles.modal}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Field
          {...register('title',
            {
              required: 'This field is required!'
            }
          )}
          className={styles.modalField}
          placeholder='Title'
          error={errors.title}
        />
        <textarea
          {...register('description')}
          placeholder='Description'
          className={styles.modalTextarea}
          rows={10}
        ></textarea>
        <Controller
          name='priority'
          control={control}
          defaultValue='low'
          render={({ field }) => <Select
            title='Priority'
            value={field.value}
            options={priorityOptions}
            classNames={styles.select}
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
              classNames={styles.dataPicker}
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
              classNames={styles.dataPicker}
              changeTimeValue={(time) => field.onChange(time)}
            />}
          />
        </div>
        <DialogActions className={styles.buttonContainer}>
          <Button type='button' title='Cancel' onClick={handleClose} />
          <Button type="submit" title='Create' />
        </DialogActions>
      </form>
    </Dialog >
  )
}

export default CreateTaskModal
