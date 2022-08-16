export type ChildrenProps = {
    className?: string,
    children: React.ReactNode | JSX.Element
}

interface IUser {
    name: string,
    email: string
    date: number
}

export interface INote {
    id: number,
    title: string,
    description: string,
    image: {
        url: string,
        blob?: File
    },
    color: string,
    owner?: IUser,
    editors?: IUser[]
}