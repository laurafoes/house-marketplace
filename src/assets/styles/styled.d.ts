import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryBg: string,
            secondaryBg: string,
            gradientBg: string,
            text: string,
            primary: string,
            secondary: string
        },
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }
    }
}
