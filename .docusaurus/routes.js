import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/thiis/markdown-page',
    component: ComponentCreator('/thiis/markdown-page', '8f0'),
    exact: true
  },
  {
    path: '/thiis/docs',
    component: ComponentCreator('/thiis/docs', '4c3'),
    routes: [
      {
        path: '/thiis/docs/API/Boolean/is.boolean',
        component: ComponentCreator('/thiis/docs/API/Boolean/is.boolean', '84f'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Boolean/is.false',
        component: ComponentCreator('/thiis/docs/API/Boolean/is.false', 'ea0'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Boolean/is.falsy',
        component: ComponentCreator('/thiis/docs/API/Boolean/is.falsy', '7de'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Boolean/is.true',
        component: ComponentCreator('/thiis/docs/API/Boolean/is.true', 'e3d'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Boolean/is.truthy',
        component: ComponentCreator('/thiis/docs/API/Boolean/is.truthy', '654'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.browser',
        component: ComponentCreator('/thiis/docs/API/Browser/is.browser', '71b'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.chrome',
        component: ComponentCreator('/thiis/docs/API/Browser/is.chrome', '227'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.edge',
        component: ComponentCreator('/thiis/docs/API/Browser/is.edge', 'fcb'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.firefox',
        component: ComponentCreator('/thiis/docs/API/Browser/is.firefox', 'dbf'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.ie',
        component: ComponentCreator('/thiis/docs/API/Browser/is.ie', '57c'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.opera',
        component: ComponentCreator('/thiis/docs/API/Browser/is.opera', 'c75'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Browser/is.safari',
        component: ComponentCreator('/thiis/docs/API/Browser/is.safari', '9bd'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/global',
        component: ComponentCreator('/thiis/docs/API/global', '1c6'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Hardware/is.ipad',
        component: ComponentCreator('/thiis/docs/API/Hardware/is.ipad', '9cb'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Hardware/is.iphone',
        component: ComponentCreator('/thiis/docs/API/Hardware/is.iphone', '39a'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Hardware/is.ipod',
        component: ComponentCreator('/thiis/docs/API/Hardware/is.ipod', '01d'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Hardware/is.phone',
        component: ComponentCreator('/thiis/docs/API/Hardware/is.phone', '1cf'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Hardware/is.windowsPhone',
        component: ComponentCreator('/thiis/docs/API/Hardware/is.windowsPhone', '069'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/html',
        component: ComponentCreator('/thiis/docs/API/html', 'dd3'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.bigInt',
        component: ComponentCreator('/thiis/docs/API/Number/is.bigInt', 'aae'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.even',
        component: ComponentCreator('/thiis/docs/API/Number/is.even', 'ade'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.infinity',
        component: ComponentCreator('/thiis/docs/API/Number/is.infinity', '8cf'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.int',
        component: ComponentCreator('/thiis/docs/API/Number/is.int', '6f6'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.negative',
        component: ComponentCreator('/thiis/docs/API/Number/is.negative', 'd8b'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.number',
        component: ComponentCreator('/thiis/docs/API/Number/is.number', 'd98'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.numeric',
        component: ComponentCreator('/thiis/docs/API/Number/is.numeric', '6a6'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.odd',
        component: ComponentCreator('/thiis/docs/API/Number/is.odd', 'cba'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.positive',
        component: ComponentCreator('/thiis/docs/API/Number/is.positive', '41e'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/Number/is.zero',
        component: ComponentCreator('/thiis/docs/API/Number/is.zero', '8ca'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/rest',
        component: ComponentCreator('/thiis/docs/API/rest', 'c66'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.camelCase',
        component: ComponentCreator('/thiis/docs/API/String/is.camelCase', '837'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.char',
        component: ComponentCreator('/thiis/docs/API/String/is.char', '6c0'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.ipv4',
        component: ComponentCreator('/thiis/docs/API/String/is.ipv4', 'af7'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.ipv6',
        component: ComponentCreator('/thiis/docs/API/String/is.ipv6', '7e9'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.kebabCase',
        component: ComponentCreator('/thiis/docs/API/String/is.kebabCase', '0e8'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.lowerCase',
        component: ComponentCreator('/thiis/docs/API/String/is.lowerCase', '77d'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.macAddress',
        component: ComponentCreator('/thiis/docs/API/String/is.macAddress', 'd63'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.pascalCase',
        component: ComponentCreator('/thiis/docs/API/String/is.pascalCase', '8be'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.snakeCase',
        component: ComponentCreator('/thiis/docs/API/String/is.snakeCase', '0e5'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.string',
        component: ComponentCreator('/thiis/docs/API/String/is.string', '202'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.upperCase',
        component: ComponentCreator('/thiis/docs/API/String/is.upperCase', '8a9'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/String/is.word',
        component: ComponentCreator('/thiis/docs/API/String/is.word', 'fe1'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/System/is.android',
        component: ComponentCreator('/thiis/docs/API/System/is.android', 'cc8'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/System/is.ios',
        component: ComponentCreator('/thiis/docs/API/System/is.ios', 'be3'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/System/is.mac',
        component: ComponentCreator('/thiis/docs/API/System/is.mac', '439'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/API/System/is.windows',
        component: ComponentCreator('/thiis/docs/API/System/is.windows', 'fef'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/category/documentation---basics',
        component: ComponentCreator('/thiis/docs/category/documentation---basics', '6fe'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/category/documentation---extras',
        component: ComponentCreator('/thiis/docs/category/documentation---extras', '126'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/Getting started/CDN',
        component: ComponentCreator('/thiis/docs/Getting started/CDN', '594'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/Getting started/import',
        component: ComponentCreator('/thiis/docs/Getting started/import', 'bf6'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/Getting started/install',
        component: ComponentCreator('/thiis/docs/Getting started/install', 'ec5'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/Getting started/Introduction',
        component: ComponentCreator('/thiis/docs/Getting started/Introduction', 'cb1'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/thiis/docs/tutorial-basics/congratulations', 'ae7'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/thiis/docs/tutorial-basics/create-a-document', '25c'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/thiis/docs/tutorial-basics/create-a-page', 'adf'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/thiis/docs/tutorial-basics/deploy-your-site', '867'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/thiis/docs/tutorial-basics/markdown-features', '319'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/thiis/docs/tutorial-extras/manage-docs-versions', '862'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/thiis/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/thiis/docs/tutorial-extras/translate-your-site', 'd23'),
        exact: true,
        sidebar: "documentationSidebar"
      }
    ]
  },
  {
    path: '/thiis/',
    component: ComponentCreator('/thiis/', 'fc2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
