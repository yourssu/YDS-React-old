import '@emotion/react'
import { SemanticColrs } from '../foundation/colors/colors-type'

declare module '@emotion/react' {
    export interface Theme {
        color: { [color in SemanticColrs]: string }
    }
}