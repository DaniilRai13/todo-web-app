import { Controller, useForm } from 'react-hook-form'
import ImageUpload from '../../../../shared/form/ImageUpload/ImageUpload';
import { IProfileData } from '../../../../config/user.data';
import Field from '../../../../shared/form/Field';
import Button from '../../../../shared/Button/Button';
import { useProfile } from '../useProfile';
import styles from './ProfileChangeForm.module.scss';
import { FC } from 'react';

interface ProfileFormProps {
  user: IProfileData | null;
}

const ProfileChangeForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<IProfileData>({
    mode: 'onChange'
  })

  const { onSubmit, user, isLoading } = useProfile()

  const handleSave = (data: IProfileData) => {
    onSubmit({ ...user, ...data })
  }

  return (
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
        />
        <Button title="Save Profile" isLoading={isLoading} />
      </div>
    </form>
  )
}

export default ProfileChangeForm;