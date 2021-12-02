# autoGenerateFilesByMenus

公司内部使用的，根据菜单自动生成页面文件以及相应的 API 文件

一般搭配 <https://www.npmjs.com/package/el-table-admin-page> 使用

开发流程为

1. 在系统管理里的菜单管理里面配置相应的页面，这时候已经有一个菜单 tree

例如:

```js
const TreeMenu = [
  {
    path: "/dashboard",
  },
  {
    path: "/system",
    children: [
      {
        path: "menus",
      },
      {
        path: "roles",
      },
      {
        path: "users",
      },
    ],
  },
];
```

2. 执行生成命令

```js
node generate.js
```

![1638455387(1)](<https://cdn.jsdelivr.net/gh/wu529778790/image/blog/1638455387(1).png>)
