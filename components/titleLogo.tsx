import { ThemeContext } from '@components/appContext'
import { nord } from '@styles/theme'
import { FC, useContext, useEffect, useRef } from 'react'
import { styled } from 'twin.macro'
import Zdog from 'zdog'

const animFrame = 120

const TitleLogo: FC = () => {
  const tickRef = useRef(0)
  const isFirstClicked = useRef(false)
  const illoRef = useRef<Zdog.Illustration | null>(null)
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null
  )
  const { state, dispatch } = useContext(ThemeContext)
  const isDark = state.themePref === 'Dark'

  // setup zdog &
  // first render
  // (isDark === false)
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
      color: nord.nord3,
      backface: nord.nord4,
    })
    dome.copy({
      color: nord.nord4,
      backface: nord.nord3,
      rotate: { x: Zdog.TAU / 2 },
    })

    illoRef.current.updateRenderGraph()

    return () => {
      illoRef.current = null
    }
  }, [])

  // react animation
  useEffect(() => {
    if (!isFirstClicked.current) {
      if (illoRef.current !== null) {
        illoRef.current.rotate.y = isDark ? Zdog.TAU / 2 : 0
        illoRef.current.updateRenderGraph()
      }
      return
    }

    const clean = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef?.current)
      }
      animationRef.current = null
      tickRef.current = 0
    }

    const animate = () => {
      if (!illoRef.current) return
      if (tickRef.current >= animFrame && animationRef.current !== null) {
        clean()
        return
      }
      const progress = tickRef.current / animFrame
      illoRef.current.rotate.y =
        (Zdog.easeInOut(progress % 1, 3) * Zdog.TAU) / 2 +
        (isDark ? 0 : Zdog.TAU / 2)
      tickRef.current++
      illoRef.current.updateRenderGraph()
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return clean
  }, [isDark])

  const toggleTheme = () => {
    dispatch({ type: isDark ? 'set_light' : 'set_dark' })
    isFirstClicked.current = true
  }

  return (
    <Body onClick={toggleTheme}>
      <Canvas className="zdog-canvas" width="28" height="28" />
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
    margin: 6px 8px 0 0;
  }
`

const Canvas = styled.canvas`
  cursor: pointer;
`

export default TitleLogo
