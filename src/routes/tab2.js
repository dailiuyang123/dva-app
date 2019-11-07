import React, { Component } from 'react'
import { connect } from 'dva';
import { Table, Button } from 'antd';


class Tab2 extends Component { //BBB同理
    changeData = () => {
        console.log("Change Data");
        const { dispatch } = this.props;
        dispatch({
            type: 'indexpage/addUser',
            payload: {},
        });

    };

    render() {
        const { columns, data } = this.props.indexpage; //获取indexpage中的state
        console.log(this.props);
        return (
            <div>
                <Button type="primary" onClick={this.changeData}>修改数据</Button>
                <div>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        )
    }
}

Tab2.propsTypes = {}
export default connect(({ indexpage }) => ({ indexpage }))(Tab2)