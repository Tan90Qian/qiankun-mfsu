import { defineConfig } from 'umi';

export default defineConfig({
  webpack5: {},
  mfsu: {},
  dynamicImport: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/slave', microApp: 'slave' },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'slave', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
      ],
    },
  },
});
