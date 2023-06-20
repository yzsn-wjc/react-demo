export default [
  {
    key: "welcome",
    path: "/welcome",
    entry: "pages/welcome",
  },
  {
    key: "com-playground",
    path: "/com-playground",
    children: [
      {
        key: "table",
        path: "/table",
        entry: "pages/comPlayground/table",
      },
    ],
  },
  {
    key: "micro-react",
    path: "/app-react/*",
    entry: "pages/micro/reactApp",
  },
  {
    key: "home",
    path: "/",
    entry: "pages/welcome",
  },
];
