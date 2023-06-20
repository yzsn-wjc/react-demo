import React, { PureComponent } from "react";
import { Table, Empty, Pagination } from "antd";

const defaultState = {
  searchParams: { pageSize: 10, pageNum: 1 },
  tableData: { list: [], total: 0 },
};

export default class TableClass extends PureComponent {
  rowKey = "id";

  constructor(props) {
    super(props);
    this.state = { ...defaultState, ...this.getDefaultState() };
  }

  getDefaultState() {
    return {};
  }

  /**
   * 重写方法 获取列表的column
   * @returns
   */
  getTabelColumns = () => [];

  /**
   * 重写方法 获取table的额外props
   * @returns
   */
  getTableProps = () => {};

  /**
   * 格式化列表请求数据
   * @returns
   */
  resolveParams = () => {
    return {};
  };

  /**
   * 请求列表数据
   * @returns
   */
  tableDataLoader = async (searchParams) => {
    return { data: [] };
  };

  /**
   * 外部调用 请求列表数据
   * @returns
   */
  loaderTableData = async (params) => {
    const resolveParams = this.resolveParams(params);
    const data = await this.tableDataLoader(resolveParams);
    this.setState({ tableData: { total: data?.length, list: data } });
  };

  renderTable = () => {
    const tableProps = this.getTableProps();
    const { tableData } = this.state;
    return (
      <Table
        rowKey={this.rowKey}
        columns={this.getTabelColumns()}
        dataSource={tableData.list}
        locale={{
          emptyText: (
            <Empty
              description="哎呀，暂无数据"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        pagination={{
          total: tableData.total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${tableData.total} 条`,
        }}
        {...tableProps}
      />
    );
  };
}
