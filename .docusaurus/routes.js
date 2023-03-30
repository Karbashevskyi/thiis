import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '155'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f9b'),
    routes: [
      {
        path: '/docs/API/Boolean/is.boolean',
        component: ComponentCreator('/docs/API/Boolean/is.boolean', '849'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Boolean/is.false',
        component: ComponentCreator('/docs/API/Boolean/is.false', '219'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Boolean/is.falsy',
        component: ComponentCreator('/docs/API/Boolean/is.falsy', '544'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Boolean/is.true',
        component: ComponentCreator('/docs/API/Boolean/is.true', 'ab9'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Boolean/is.truthy',
        component: ComponentCreator('/docs/API/Boolean/is.truthy', '628'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.browser',
        component: ComponentCreator('/docs/API/Browser/is.browser', '791'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.chrome',
        component: ComponentCreator('/docs/API/Browser/is.chrome', '749'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.edge',
        component: ComponentCreator('/docs/API/Browser/is.edge', 'ab2'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.firefox',
        component: ComponentCreator('/docs/API/Browser/is.firefox', '589'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.ie',
        component: ComponentCreator('/docs/API/Browser/is.ie', 'ec2'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.opera',
        component: ComponentCreator('/docs/API/Browser/is.opera', '317'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Browser/is.safari',
        component: ComponentCreator('/docs/API/Browser/is.safari', 'df2'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/global',
        component: ComponentCreator('/docs/API/global', 'ed3'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Hardware/is.ipad',
        component: ComponentCreator('/docs/API/Hardware/is.ipad', '072'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Hardware/is.iphone',
        component: ComponentCreator('/docs/API/Hardware/is.iphone', 'e06'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Hardware/is.ipod',
        component: ComponentCreator('/docs/API/Hardware/is.ipod', 'fec'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Hardware/is.phone',
        component: ComponentCreator('/docs/API/Hardware/is.phone', '7b4'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Hardware/is.windowsPhone',
        component: ComponentCreator('/docs/API/Hardware/is.windowsPhone', '66e'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/html',
        component: ComponentCreator('/docs/API/html', 'b22'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.bigInt',
        component: ComponentCreator('/docs/API/Number/is.bigInt', 'c65'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.even',
        component: ComponentCreator('/docs/API/Number/is.even', 'd8d'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.infinity',
        component: ComponentCreator('/docs/API/Number/is.infinity', '42b'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.int',
        component: ComponentCreator('/docs/API/Number/is.int', '22c'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.negative',
        component: ComponentCreator('/docs/API/Number/is.negative', '450'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.number',
        component: ComponentCreator('/docs/API/Number/is.number', 'aef'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.numeric',
        component: ComponentCreator('/docs/API/Number/is.numeric', '3ec'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.odd',
        component: ComponentCreator('/docs/API/Number/is.odd', '444'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.positive',
        component: ComponentCreator('/docs/API/Number/is.positive', '958'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/Number/is.zero',
        component: ComponentCreator('/docs/API/Number/is.zero', '6e6'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/rest',
        component: ComponentCreator('/docs/API/rest', 'b4b'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.camelCase',
        component: ComponentCreator('/docs/API/String/is.camelCase', '120'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.char',
        component: ComponentCreator('/docs/API/String/is.char', '8e7'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.ipv4',
        component: ComponentCreator('/docs/API/String/is.ipv4', '35c'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.ipv6',
        component: ComponentCreator('/docs/API/String/is.ipv6', '086'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.kebabCase',
        component: ComponentCreator('/docs/API/String/is.kebabCase', '09b'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.lowerCase',
        component: ComponentCreator('/docs/API/String/is.lowerCase', '1e9'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.macAddress',
        component: ComponentCreator('/docs/API/String/is.macAddress', '0e6'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.pascalCase',
        component: ComponentCreator('/docs/API/String/is.pascalCase', '0bd'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.snakeCase',
        component: ComponentCreator('/docs/API/String/is.snakeCase', '1f5'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.string',
        component: ComponentCreator('/docs/API/String/is.string', 'b6e'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.upperCase',
        component: ComponentCreator('/docs/API/String/is.upperCase', '9f0'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/String/is.word',
        component: ComponentCreator('/docs/API/String/is.word', '03a'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/System/is.android',
        component: ComponentCreator('/docs/API/System/is.android', '7b9'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/System/is.ios',
        component: ComponentCreator('/docs/API/System/is.ios', '5e4'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/System/is.mac',
        component: ComponentCreator('/docs/API/System/is.mac', '21c'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/API/System/is.windows',
        component: ComponentCreator('/docs/API/System/is.windows', '46f'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/category/documentation---basics',
        component: ComponentCreator('/docs/category/documentation---basics', 'e5b'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/category/documentation---extras',
        component: ComponentCreator('/docs/category/documentation---extras', '0ed'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/Getting started/CDN',
        component: ComponentCreator('/docs/Getting started/CDN', '505'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/Getting started/import',
        component: ComponentCreator('/docs/Getting started/import', '74e'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/Getting started/install',
        component: ComponentCreator('/docs/Getting started/install', '5db'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/Getting started/Introduction',
        component: ComponentCreator('/docs/Getting started/Introduction', '462'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '897'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', '1a3'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f4a'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '154'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'cd7'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '512'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '593'),
        exact: true,
        sidebar: "documentationSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a96'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
