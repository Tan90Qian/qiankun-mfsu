import { defineConfig } from 'umi';

export default defineConfig({
  webpack5: {},
  mfsu: {},
  dynamicImport: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  qiankun: {
    slave: {},
  },
});
