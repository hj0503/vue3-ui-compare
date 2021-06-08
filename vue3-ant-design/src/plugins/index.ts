import { App } from 'vue'
import { useAntDesign } from './ant-design'
import { useCurrentUi } from './current-ui'

const usePlugins: Array<(app: App) => void> = [useAntDesign, useCurrentUi]

export default (app: App) => {
  usePlugins.forEach((usePlugin) => {
    usePlugin(app)
  })
}
