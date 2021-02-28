import { Action, State, themeReducer } from '@lib/themeReducer'
import useThemePref from '@lib/useTheme'
import { createContext, Dispatch, FC, useEffect, useReducer } from 'react'

interface Props {
  children: React.ReactNode
}

const initialState: State = {
  themePref: 'Light',
}

interface ContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export const ThemeContext = createContext({
  state: initialState,
} as ContextProps)

const AppContext: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const isDark = useThemePref()

  useEffect(() => {
    dispatch({ type: isDark ? 'set_dark' : 'set_light' })
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default AppContext
