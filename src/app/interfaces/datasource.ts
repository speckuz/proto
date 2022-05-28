// define interfaces on datasource
export interface IUserData{
    username:string,
    gender:Gender,
    location:Location,
    hobbies:string[]
}

export enum Gender{
    MALE=0,
    FEMALE=1
}

export enum Location{
    Hefei=0,
    "Mountain Huang"=1,
    "Mountain Ma An"=2
}