import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modulesFiles: any = import.meta.globEager('../mock/*.ts')
let modules: Array<any> = []
for (const path in modulesFiles) {
  modules = modules.concat(modulesFiles[path].default)
}

export function setupProdMockServer() {
  createProdMockServer([...modules])
}
