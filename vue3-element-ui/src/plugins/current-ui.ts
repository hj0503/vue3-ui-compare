import { App } from 'vue'
import PageLayout from '@/components/page-layout/index.vue'
import SvgIcon from '@/components/svg-icon/index.vue'
const components = [PageLayout, SvgIcon]

// TODO require类型报错
const req = (require as any).context('../../assets/svgs', false, /\.svg$/)
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
requireAll(req)

export const useCurrentUi = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
