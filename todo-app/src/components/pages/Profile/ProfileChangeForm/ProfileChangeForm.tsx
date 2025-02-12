import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IProfileData } from '../../../../config/user.data'
import Button from '../../../../shared/Button/Button'
import Field from '../../../../shared/form/Field'
import ImageUpload from '../../../../shared/form/ImageUpload/ImageUpload'
import Heading from '../../../../shared/Heading/Heading'
import { useProfile } from '../useProfile'
import styles from './ProfileChangeForm.module.scss'

const ProfileChangeForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<IProfileData>({
    mode: 'onChange'
  })

  const { onSubmit, updateUserEmail, user, isLoading } = useProfile()
  const [isProfileChanging, setIsProfileChanging] = useState(false)

  const handleSave = async (data: IProfileData) => {
    setIsProfileChanging(true)
    try {
      if (data.email !== user?.email) {
        updateUserEmail({ email: data.email })
      }
      await onSubmit({ ...user, ...data })
    } catch (error) {
      console.error(error)
    } finally {
      setIsProfileChanging(false)
    }
  }

  return (
    <div className={styles.changeProfile}>
      <Heading title='Change Profile' className={styles.title} />
      <form onSubmit={handleSubmit(handleSave)} className={styles.form}>
        <Controller
          name='img'
          control={control}
          defaultValue={user?.img || 'https://png.klev.club/uploads/posts/2024-06/png-klev-club-m6sy-p-znachok-profilya-png-21.png'}
          render={({ field }) => <ImageUpload
            currentImageUrl={field.value}
            onImageChange={(file) => field.onChange(file)}
            maxSize={3145728}
          />}
        />
        <div className={styles.mainInfo}>
          <Field {...register('username')} placeholder='Username' defaultValue={user?.username || ''} />
          <Field {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
            placeholder='Email'
            defaultValue={user?.email || ''}
            error={errors.email}
          />
          <Button title="Save Profile" isLoading={isProfileChanging} disabled={isLoading} />
        </div>
      </form>
    </div>
  )
}

export default ProfileChangeForm