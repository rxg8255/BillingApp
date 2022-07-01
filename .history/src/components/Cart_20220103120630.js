import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { Table } from 'antd';

const columns = [
    {
        title: 'Id',
        dataIndex: 'key',
        width: 40,
        fixed: 'left'
      },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 200,
        fixed: 'left'
    },
    {
      title: 'ML',
      dataIndex: 'quantity',
      width: 80,
      fixed: 'left'
    },
    {
        title: 'Count',
        dataIndex: 'count',
        width: 40,
        fixed: 'left'
    },
    {
      title: 'MRP',
      dataIndex: 'mrp_price',
      width: 40,
      fixed: 'left'
    },
    {
      title: 'Total',
      dataIndex: 'total_price',
      width: 40,
      fixed: 'left'
    },
  ];

export default function Cart() {
  const [selectedData, setSelectedData] = useState();
  const { state } = useContext(Store);

  useEffect(() => {
    debugger;
    setSelectedData(state.selectedData);
  }, [state.selectedData]);

  return (
    <Table columns={columns} dataSource={selectedData} size="small" />
  );
}