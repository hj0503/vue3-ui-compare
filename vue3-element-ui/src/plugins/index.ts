import { App } from 'vue'
import { useElementPlus } from './element-plus'
import { useCurrentUi } from './current-ui'

const usePlugins: Array<(app: App) => void> = [useElementPlus, useCurrentUi]

export default (app: App) => {
  usePlugins.forEach(usePlugin => {
    usePlugin(app)
  })
}
