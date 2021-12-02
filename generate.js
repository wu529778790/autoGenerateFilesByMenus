const fs = require("fs");
const path = require("path");

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
// 把tree的菜单变成平表用于生成文件，真实项目中其实不用，因为后台返回的就是平表，数据库设计存的就是平表，不是tree
const treeFlat = (tree) => {
  let res = [];
  let temp = "";
  const rec = (arr) => {
    if (!tree.length) return;
    arr.map((item) => {
      if (item.children) {
        temp = item.path;
        rec(item.children);
      } else {
        if (temp !== "") {
          res.push({
            ...item,
            path: temp + "/" + item.path,
          });
        } else {
          res.push(item);
        }
      }
    });
  };
  rec(tree);
  return res;
};
const menus = treeFlat(TreeMenu);
// [
//   { path: '/dashboard', template: 'list' },
//   { path: '/system/menus', template: 'list' },
//   { path: '/system/roles', template: 'list' },
//   { path: '/system/users', template: 'list' }
// ]

// 递归创建目录 同步方法
function mkdirsSync(dirname, callback) {
  if (fs.existsSync(dirname)) {
    callback && callback();
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      callback && callback();
      return true;
    }
  }
}

// 模板文件
const vueTemplate = fs.readFileSync("./template/views/list.vue");
const apiTemplate = fs.readFileSync("./template/api/list.js");

menus.map((item) => {
  item = item.path;
  // 生成views文件
  mkdirsSync(`./views/${item}`, () => {
    fs.writeFileSync(
      `./views${item}/list.vue`,
      vueTemplate.toString().replaceAll("CONFIGURL", `${item}/list.js`)
    );
    console.log("\x1B[32m%s\x1B[0m", `./views${item}/list.vue 文件创建完成`);
  });
  // 生成相对应的api文件
  mkdirsSync(`./api/${item}`, () => {
    fs.writeFileSync(
      `./api${item}/list.js`,
      apiTemplate.toString().replaceAll("CONFIGURL", item)
    );
    console.log("\x1B[32m%s\x1B[0m", `./api${item}/list.js 文件创建完成`);
  });
});
