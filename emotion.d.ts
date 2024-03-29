import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      background: string
      body: string
      shade: string
      placeholder: string
      tint: string
    }
    textColor: {
      base: string
    }
  }
}
