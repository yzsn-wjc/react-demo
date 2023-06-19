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
    key: "home",
    path: "/",
    entry: "pages/welcome",
  },
];
