// twin.d.ts
import { css as cssImport } from '@emotion/react'
import '@emotion/react/types/css-prop'
import styledImport from '@emotion/styled'
import 'twin.macro'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string
    }
  }
}
