export default [
  {
    key: "welcome",
    label: "首页",
    path: "/welcome",
  },
  {
    key: "mirco-app",
    label: "微前端应用",
    children: [
      {
        key: "mirco-app-1",
        label: "vue微应用",
      },
      {
        key: "mirco-app-2",
        label: "react微应用",
      },
    ],
  },
];
