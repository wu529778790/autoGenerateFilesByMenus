# autoGenerateFilesByMenus

公司内部使用的，根据菜单自动生成页面文件以及相应的 API 文件

一般搭配 <https://www.npmjs.com/package/el-table-admin-page> 使用

`el-table-admin-page` 作为 list 末班文件

开发流程为

1. 在系统管理里的菜单管理添加页面，可以选择对应的模板

生成如下的数据结构

```js
const TreeMenu = [
  {
    path: "/dashboard",
    template: "list",
  },
  {
    path: "/system",
    children: [
      {
        path: "menus",
        template: "list",
      },
      {
        path: "roles",
        template: "list",
      },
      {
        path: "users",
        template: "list",
      },
    ],
  },
];
```

2. 执行生成命令

项目中的命令一般放到package.json文件中的script里面npm run generate

这里直接使用node执行

```js
node generate.js
```

