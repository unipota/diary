import { Smush32 } from '@thi.ng/random'
import { hsla } from 'color2k'

export const genColor = (
  seed: string,
  saturation: number,
  lightness: number,
  alpha: number
): string => {
  const seednum = seed.split('').reduce((acc: number, cur: string): number => {
    return acc + cur.charCodeAt(0)
  }, 0)
  const rnd = new Smush32(seednum)
  return hsla(rnd.minmax(0, 360), saturation, lightness, alpha)
}
