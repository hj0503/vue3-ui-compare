/**
 * 路由和菜单相关函数
 */
export function matchRouter(tree: any[], name: any) {
  let routerName = ''
  const deepMath = function (tree: any[]) {
    for (let i = 0; i < tree.length; i++) {
      if (routerName) break
      const item = tree[i]
      if (item.children && item.children.length) deepMath(item.children)
      const index = name.indexOf(item.name)
      if (~index && !routerName) routerName = item.name
    }
  }
  deepMath(tree)
  return routerName
}
