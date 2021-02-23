import { useTheme } from '@emotion/react'
import { FC } from 'react'

const RoundedTriangle: FC = () => {
  const theme = useTheme()

  return (
    <>
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.73205 11C7.96225 12.3333 6.03775 12.3333 5.26795 11L0.937822 3.5C0.168022 2.16666 1.13027 0.499999 2.66987 0.499999L11.3301 0.5C12.8697 0.5 13.832 2.16667 13.0622 3.5L8.73205 11Z"
          fill={theme.textColor.base}
        />
      </svg>
    </>
  )
}

export default RoundedTriangle
