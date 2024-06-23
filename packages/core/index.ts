import components from './components.ts';
import {makeInstaller} from '@my-element/utils'
import '@my-element/theme/index.css'

const installer = makeInstaller(components)

export * from '@my-element/components'
export default installer