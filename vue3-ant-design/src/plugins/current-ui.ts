import { App } from 'vue'
import PageLayout from '@/components/page-layout/index.vue'
import SvgIcon from '@/components/svg-icon/index.vue'
const components = [PageLayout, SvgIcon]

export const useCurrentUi = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
