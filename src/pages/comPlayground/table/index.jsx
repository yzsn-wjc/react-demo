import React from "react";

import TableClass from "components/TableClass";

import request from "request";

export default class TableExample extends TableClass {
  rowKey = "_id";

  getDefaultState() {
    return { a: 111111 };
  }

  getTabelColumns = () => {
    return [
      {
        dataIndex: "_id",
        title: "id",
      },
      {
        dataIndex: "nickname",
        title: "姓名",
      },
      {
        dataIndex: "age",
        title: "年龄",
      },
      {
        dataIndex: "gender",
        title: "性别",
      },
      {
        dataIndex: "createTime",
        title: "创建时间",
      },
    ];
  };

  componentDidMount() {
    this.loaderTableData();
  }

  tableDataLoader = async (searchParams) => {
    try {
      const { code, data } = await request("/user/get-users", searchParams);
      if (code === 200) {
        return data;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <div>{this.renderTable()}</div>;
  }
}
