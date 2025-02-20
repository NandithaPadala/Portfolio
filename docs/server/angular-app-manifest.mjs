
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28227, hash: '7e01b09b51a341d42dca3194de4acb30366405f1ef26aa6e49b1efc2bb6b8f12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17475, hash: '498136c359f9ff2ecfe0360dae0d020405a90fac1440d24c7c00d6aa190cc19d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58914, hash: '188a38b659c254f2efcf5e3c45fa0c404d37d4c222aced074e6a29028b6f8542', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QOXYRDBI.css': {size: 238906, hash: 'Hrdp5Ejci/I', text: () => import('./assets-chunks/styles-QOXYRDBI_css.mjs').then(m => m.default)}
  },
};
