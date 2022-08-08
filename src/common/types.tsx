export type ChildrenProps = {
    className?: string,
    children: React.ReactNode | JSX.Element
}

export interface INote {
    title: string,
    description: string,
    image: string,
    color: string
}