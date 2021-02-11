import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      background: string
      shade: string
      body: string
      tint: string
      placeholder: string
    }
    textColor: {
      base: string
    }
  }
}
