import { Session } from "next-auth"
import { MouseEventHandler } from "react"

export interface ItemTemplateProps{
    key: any
    title: string
    component: any
    inputProps: any
    link: string
    durationInFrames: number
}

export interface HeaderProps{
    actionLabel: string
}

export interface ProviderProps{
    children: any,
    session?: Session
}

export interface SubmitButtonProps{
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
    submitting: boolean
}

export interface FaqCardProps{
    faqsList: any
    idx: any
}

export interface ListTemplateProps{
    isLandingPage: boolean
}

export interface TemplatePaginationProps{
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    choose: number;
}