import { SubmitHandler } from "react-hook-form"
import { IProfileData } from "../../../config/user.data"
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector"
import { userService } from "../../../services/user.service"

export const useProfile = () => {
  const { user } = useTypedSelector(({ user }) => user)
  const onSubmit: SubmitHandler<IProfileData> = (data: IProfileData) => {
    if (user) {
      userService.updateProfile(user?.id, data)
    }
  }
  return {
    user,
    onSubmit
  }
}