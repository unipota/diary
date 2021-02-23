import type { Theme } from '@emotion/react'
import { transparentize } from 'color2k'

export const nord = {
  nord0: '#2E3440', // Polar Night
  nord1: '#3B4252',
  nord2: '#434C5E',
  nord3: '#4C566A',
  nord4: '#D8DEE9', // Snow Storm
  nord5: '#E5E9F0',
  nord6: '#ECEFF4',
  nord7: '#8FBCBB', // Frost
  nord8: '#88C0D0',
  nord9: '#81A1C1',
  nord10: '#5E81AC',
  nord11: '#BF616A', // Aurora
  nord12: '#D08770',
  nord13: '#EBCB8B',
  nord14: '#A3BE8C',
  nord15: '#B48EAD',
}

export const LightTheme: Theme = {
  color: {
    background: nord.nord5,
    body: nord.nord2,
    shade: transparentize(nord.nord4, 0.2),
    placeholder: nord.nord0,
    tint: nord.nord4,
  },
  textColor: {
    base: nord.nord3,
  },
}

export const DarkTheme: Theme = {
  color: {
    background: nord.nord0,
    body: nord.nord4,
    shade: transparentize(nord.nord1, 0.1),
    placeholder: nord.nord3,
    tint: nord.nord4,
  },
  textColor: {
    base: transparentize(nord.nord4, 0.2),
  },
}
