// prism theme
import './static/prism-theme.css'
import { wrapRootElement as wrap } from './src/components/wrap-root-element'

require("prismjs/themes/prism-solarizedlight.css")

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = wrap
