export type ChildrenProps = {
    className?: string,
    children: React.ReactNode | JSX.Element
}

export interface INote {
    id: number,
    title: string,
    description: string,
    image: {
        url: string,
        blob?: File
    },
    color: string
}