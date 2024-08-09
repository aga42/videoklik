import { MouseEventHandler } from "react"


export interface QuranListProps{
    kategori: string
    indexBahasa: number
}

export interface QuranItemListProps{
    data: any
    key: any
    arabic: string
    arti: string
    surat: string
    kategori: string
}

export interface ChooseAnswerProps{
    chooseAnswerClick?: MouseEventHandler<HTMLButtonElement>
}

export interface NavTitleProps{
    title: string
}

export interface HeaderProps{
    index: number
    actionIndex: Function
}

export interface HeroProps{
    index: number
    firstLoad: boolean
}

export interface CreatorProps{
    index: number
}