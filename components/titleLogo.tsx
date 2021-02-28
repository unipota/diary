import { ThemeContext } from '@components/appContext'
import { nord } from '@styles/theme'
import { FC, useContext, useEffect, useRef } from 'react'
import { styled } from 'twin.macro'
import Zdog from 'zdog'

const animFrame = 120

const TitleLogo: FC = () => {
  const tickRef = useRef<number>(0)
  const illoRef = useRef<Zdog.Illustration | null>(null)
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null
  )
  const { state, dispatch } = useContext(ThemeContext)
  const isDark = state.themePref === 'Dark'

  // setup zdog
  useEffect(() => {
    const illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      dragRotate: false,
    })
    illoRef.current = illo

    const dome = new Zdog.Hemisphere({
      addTo: illo,
      diameter: 20,
      stroke: false,
      color: isDark ? nord.nord4 : nord.nord3,
      backface: isDark ? nord.nord3 : nord.nord4,
    })
    dome.copy({
      color: isDark ? nord.nord3 : nord.nord4,
      backface: isDark ? nord.nord4 : nord.nord3,
      rotate: { x: Zdog.TAU / 2 },
    })

    return () => {
      illoRef.current = null
    }
  }, [])

  // react animation
  useEffect(() => {
    const animate = () => {
      if (!illoRef.current) return
      if (tickRef.current >= animFrame && animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
        tickRef.current = 0
        return
      }
      const progress = tickRef.current / animFrame
      illoRef.current.rotate.y =
        (Zdog.easeInOut(progress % 1, 3) * Zdog.TAU) / 2 +
        (isDark ? Zdog.TAU / 2 : 0)
      tickRef.current++
      illoRef.current.updateRenderGraph()
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef?.current)
      }
      animationRef.current = null
      tickRef.current = 0
    }
  }, [isDark])

  const toggleTheme = () => {
    dispatch({ type: isDark ? 'set_light' : 'set_dark' })
  }

  return (
    <Body onClick={toggleTheme}>
      <Canvas className="zdog-canvas" width="20" height="20" />
      <p>unilog</p>
    </Body>
  )
}

const Body = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 32px;
  font-weight: bold;
  justify-content: center;
  padding: 24px 12px 12px 0;
  width: 100%;

  & > canvas {
    margin: 6px 12px 0 0;
  }
`

const Canvas = styled.canvas`
  cursor: pointer;
`

export default TitleLogo
