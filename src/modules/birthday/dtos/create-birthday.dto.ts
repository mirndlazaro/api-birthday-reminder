import { Like, SpecialMoment } from "@prisma/client"

export class CreateBirthdayDTO {
    readonly firstName: string
    readonly lastName: string
    readonly surname: string
    readonly gender: string
    readonly birthdate: Date
    readonly likes?: Like[]
    readonly specialMoments?: SpecialMoment[]

    readonly userId: string
}