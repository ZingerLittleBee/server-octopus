import { UserVo } from '../user/user.type'

type CreateProfile = {
    userId: string
    name?: string
    description?: string
    avatar?: string
}

type UpdateProfile = CreateProfile

type ProfileVo = {
    name?: string
    avatar?: string
    description?: string
}

export { ProfileVo, CreateProfile, UpdateProfile }