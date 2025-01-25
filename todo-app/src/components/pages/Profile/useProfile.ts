import { SubmitHandler } from "react-hook-form"
import { IProfileData } from "../../../config/user.data"
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector"
import { useActions } from '../../../shared/hooks/useActions';

export const useProfile = () => {
  const { user, error, isSuccess, isLoading } = useTypedSelector(({ user }) => user)
  const { updateProfile, resetStatus } = useActions()

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
    onSubmit
  }
}