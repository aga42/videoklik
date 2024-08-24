import { Fade, Move, Scale } from "remotion-animated";

export const scaleIn = [
  Fade({start: 0, initial: 0, to: 0, duration: 15}),
  Fade({start: 15, initial: 0, to: 1, duration: 15}),
  Scale({initial: 0, by: 1, start: 15, duration: 15}),
  Scale({initial: 1, by: 1, start: 30, duration: 15})
]

export function moveTextRightIn(inAtFrame: number): any{
  return [
    Fade({start: 0, initial: 0, to: 0, duration: inAtFrame}),
    Fade({start: inAtFrame, initial: 0, to: 1, duration: 15}),
    Move({start: inAtFrame, initialX: -20, x: 0, duration: 15})
  ]
}

export const scaleHorizontalIn = [
  Fade({start: 0, initial: 0, to: 0, duration: 15}),
  Fade({start: 15, initial: 0, to: 1, duration: 15}),
  Scale({initialX: 0, x: 1, start: 15, duration: 15}),
]

export function scaleHorizontalOut(outAtFrame: number): any{
  return  [
    Fade({start: outAtFrame, initial: 1, to: 0, duration: 15}),
    Scale({initialX: 1, x: 0, start: outAtFrame, duration: 15})
  ]
}

export function fadeIn(inAtFrame: number): any{
  return  [
    Fade({start: 0, initial: 0, to: 0, duration: inAtFrame}),
    Fade({start: inAtFrame, initial: 0, to: 1, duration: 15})
  ]
}