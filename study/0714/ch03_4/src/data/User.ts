import * as C from './chance'
import * as I from './image'

export type IUser = {
    uuid: string
    name: string
    jobTitle: string
    email: string
    avatar: string
}
// prettier-ignore
export const makeUser = (
    uuid: string,
    name: string,
    jobTitle: string,
    email: string,
    avatar: string
): IUser => ({
    uuid,
    name,
    jobTitle,
    email,
    avatar
})
export const makeRandomUser = (): IUser => 
    makeUser(
        C.makeUuid(),
        C.makeName(),
        C.makeJobTitle(),
        C.makeEmail(),
        I.makeAvatar()
    )