# autoGenerateFilesByMenus

公司内部使用的，根据菜单自动生成页面文件以及相应的 API 文件

一般搭配 <https://www.npmjs.com/package/el-table-admin-page> 使用

`el-table-admin-page` 作为 list 模板文件

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

项目中的命令一般放到 package.json 文件中的 script 里面 npm run generate

这里直接使用 node 执行

```js
node generate.js
```

生成的 vue 文件也自动的替换成了对应的 api 路径，不用手动引入

![20211202232701](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20211202232701.png)

对应的 api 文件里面也写上了相应的 url 路径，只要和后端统一好规范，这个也不用手动改，默认带出增删改查

![20211202233029](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20211202233029.png)
