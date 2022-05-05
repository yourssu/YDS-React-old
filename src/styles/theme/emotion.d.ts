import { LightSemanticColrs, DarkSemanticColors } from './../foundation/colors/colors-type'
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: { [color in LightSemanticColrs]: string } | { [color in DarkSemanticColors]: string }
  }
}
