import {toast} from "@/components/ui/use-toast";
import instance from "@/requests/instance";
import {ResultUtil} from "@/utils/ResultUtil";

export const login = async (password: string, email?: string, username?: string) => {
  if (!email && !username) {
    toast({
      title: "Email or Username is required",
    })
    return
  }
  const { data } = await instance.post<ResultUtil<unknown>>('/auth/login', {
    email,
    username,
    password
  })
  return data
}

export const register = async (email: string, username: string, password: string) => {
  const { data } = await instance.post<ResultUtil<unknown>>('/auth/register', {
    email,
    username,
    password
  })
  return data
}
