import { FC, useState } from "react";
import Button from "../../../../shared/Button/Button";
import Field from "../../../../shared/form/Field";
import { useForm } from "react-hook-form";
import styles from './PasswordChangeForm.module.scss'
import Heading from "../../../../shared/Heading/Heading";
import { useActions } from "../../../../shared/hooks/useActions";
import { useProfile } from "../useProfile";

interface IPasswordForm {
  password: string
  newPassword: string
}

const PasswordChangeForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IPasswordForm>({
    mode: 'onChange'
  })

  const { updateUserPassword } = useActions()
  const { isLoading } = useProfile()
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);

  const onSubmit = async (data: IPasswordForm) => {
    setIsPasswordChanging(true);
    try {
      await updateUserPassword(data);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsPasswordChanging(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Heading title="Change Password" className={styles.title} />
      <div className={styles.mainInfo}>
        <Field
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          placeholder="Current Password"
          type="password"
          error={errors.password}
        />
        <Field
          {...register('newPassword', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          placeholder="New Password"
          type="password"
          error={errors.newPassword}
        />
        <Button title="Change Password" isLoading={isPasswordChanging} disabled={isLoading} />
      </div>
    </form>
  );
}

export default PasswordChangeForm;