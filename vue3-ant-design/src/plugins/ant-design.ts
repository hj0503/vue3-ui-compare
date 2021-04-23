import { App } from 'vue';
import 'ant-design-vue/lib/style/index.css';
import 'ant-design-vue/lib/grid/style/index.css';
import 'ant-design-vue/lib/message/style/index.css';
import 'ant-design-vue/lib/button/style/index.css';
import 'ant-design-vue/lib/input/style/index.css';
import 'ant-design-vue/lib/tabs/style/index.css';
import 'ant-design-vue/lib/form/style/index.css';
import 'ant-design-vue/lib/input-number/style/index.css';
import 'ant-design-vue/lib/select/style/index.css';
import 'ant-design-vue/lib/drawer/style/index.css';
import 'ant-design-vue/lib/collapse/style/index.css';
import 'ant-design-vue/lib/tooltip/style/index.css';
import 'ant-design-vue/lib/empty/style/index.css';
import 'ant-design-vue/lib/config-provider/style/index.css';
import 'ant-design-vue/lib/layout/style/index.css';
import 'ant-design-vue/lib/menu/style/index.css';
import 'ant-design-vue/lib/table/style/index.css';
import 'ant-design-vue/lib/pagination/style/index.css';
import 'ant-design-vue/lib/divider/style/index.css';
import 'ant-design-vue/lib/avatar/style/index.css';
import 'ant-design-vue/lib/dropdown/style/index.css';
import 'ant-design-vue/lib/popover/style/index.css';
import 'ant-design-vue/lib/modal/style/index.css';
import {
  Button,
  Input,
  Tabs,
  Form,
  InputNumber,
  Select,
  Drawer,
  Collapse,
  Tooltip,
  Empty,
  ConfigProvider,
  Layout,
  Menu,
  Table,
  Pagination,
  Divider,
  Avatar,
  Dropdown,
  Popover,
  Modal,
} from 'ant-design-vue';

const components = [
  Button,
  Input,
  Tabs,
  Form,
  InputNumber,
  Select,
  Drawer,
  Collapse,
  Tooltip,
  Empty,
  ConfigProvider,
  Layout,
  Menu,
  Table,
  Pagination,
  Divider,
  Avatar,
  Dropdown,
  Popover,
  Modal,
]

export const useAntDesign = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
};
