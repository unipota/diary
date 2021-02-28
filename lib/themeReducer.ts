import { Reducer } from 'react'

type ThemePref = 'Light' | 'Dark'

export interface State {
  themePref: ThemePref
}

type ActionType = 'set_light' | 'set_dark'

export interface Action {
  type: ActionType
}

export const themeReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'set_light':
      return {
        ...state,
        themePref: 'Light',
      }
    case 'set_dark':
      return {
        ...state,
        themePref: 'Dark',
      }
    default:
      return state
  }
}
