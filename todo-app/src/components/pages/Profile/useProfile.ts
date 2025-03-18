import { SubmitHandler } from "react-hook-form"
import { IProfileData } from "@config/user.data"
import { useTypedSelector } from "@hooks/useTypedSelector"
import { useActions } from '@hooks/useActions'

export const useProfile = () => {
  const { user, error, isSuccess, isLoading } = useTypedSelector(({ user }) => user)
  const { updateProfile, updateUserEmail, resetStatus } = useActions()

  const onSubmit: SubmitHandler<IProfileData> = (data: IProfileData) => {
    console.log(data)
    if (user) {
      updateProfile({ id: user?.id, data })
    }
  }

  return {
    user,
    error,
    isSuccess,
    resetStatus,
    isLoading,
    updateUserEmail,
    onSubmit
  }
}