import type { Theme } from '@emotion/react'

const nord = {
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
    background: nord.nord4,
    shade: '#2e3440',
    body: '#d8dee9',
    tint: '#88c0d0',
    placeholder: '#4c566a',
  },
  textColor: {
    base: nord.nord0,
  },
}

export const DarkTheme: Theme = {
  color: {
    background: nord.nord0,
    shade: '#2e3440',
    body: '#d8dee9',
    tint: '#88c0d0',
    placeholder: '#4c566a',
  },
  textColor: {
    base: nord.nord6,
  },
}
