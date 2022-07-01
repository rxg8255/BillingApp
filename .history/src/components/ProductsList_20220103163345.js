import React, { Component } from 'react';
import { Table, InputNumber  } from 'antd';
import axios from 'axios';
import { Store } from '../Store';

const columns = [
    {
        title: 'Id',
        dataIndex: 'key',
      },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'ML',
      dataIndex: 'quantity',
    },
    {
      title: 'Qty',
      dataIndex: 'available',
    },
    {
      title: 'MRP',
      dataIndex: 'mrp_price',
    },
  ];

class ProductsList extends Component {
  static contextType = Store;

    constructor(props) {
        super(props);
        this.state = {
            masterData: [],
            data: [],
            searchValue: this.props.searchValue,
            selectedData: [],
            prevSelectedData: [],
            changeData: [],
            changeKey: "",
          };
    }

    componentDidUpdate(){
      let currentComponent = this;
      currentComponent.state.selectedData.forEach(item => {
        if(item.key === currentComponent.state.changeKey){
          item.total_price = currentComponent.state.changeData;
        }
        console.log(currentComponent.state.selectedData);
        if(currentComponent.state.prevSelectedData !== currentComponent.state.selectedData){
          this.setState({prevSelectedData:currentComponent.state.selectedData})
          const dispatch = this.context.dispatch;
          dispatch({type:'ADD_DATA', payload: currentComponent.state.changeData});
        }
      });
      const resp = currentComponent.state.masterData;
      const temp = resp.filter(item => item.name.startsWith(currentComponent.props.searchValue))
      if (currentComponent.state.searchValue !== currentComponent.props.searchValue) {
        this.setState({searchValue:currentComponent.props.searchValue})
        this.setState({data: temp})
    }
    }

    componentDidMount() {
        let currentComponent = this;
        const url = 'http://127.0.0.1:8000/api';
         axios.get(`${url}/inventory/`)
         .then(function (response) {
          //  debugger;
            const resp = response.data;
            // resp.map((item) => item['key'] = item.id);
            currentComponent.setState({data: resp});
            currentComponent.setState({masterData: resp});
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
          });
        }
        
    render() {

    //   const onChange = (e) => {
    //     console.log('clicked')
    //     // console.log('changed', value);
    // }

      const rowSelection = {
        onChange: async (selectedRowKeys, selectedRows) => {
          await selectedRows.map((item) => item['total_price'] = Number(item['mrp_price']));
          //await selectedRows.map((item) => item['count'] = <InputNumber name='name' min={1} max={item.available} defaultValue={1} onChange= {(e) => { 
            //                                      this.setState({changeData: e * item.mrp_price});this.setState({changeKey:item.key})}} />);
          await this.setState({selectedData:selectedRows})
          const dispatch = this.context.dispatch;
          dispatch({type:'ADD_DATA', payload: this.state.selectedData})
          // console.log(this.state.selectedData)
          // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
      };

        return (
            <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}

export default ProductsList;