import React, { Component } from 'react';
import { Table, Button, Carousel } from 'antd';
import { connect } from 'dva';
import style from './IndexPage.css'
import oneimag from '../assets/images/bg.jpg';
import twoimage from '../assets/images/ocasion.jpg';

class IndexPage extends Component {
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
      <div style={{ width: "80%", margin: "0 auto" }} >
        <Carousel className={style.carousel} autoplay >
          <div>
            <img style={{height:"300px",width:"1480px"}} src={oneimag} />
            <h3>1</h3>
          </div>
          <div>
          <img style={{height:"300px",width:"1480px"}} src={twoimage} />
          </div>
          <div>
          <img style={{height:"300px",width:"1480px"}} src={oneimag} />
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        {/* 文章列表 */}
        <div className="item-list" style={{marginTop:"20px"}}>
          <div className="item" style={{ width: "60%", margin: "0 auto", border: 'solid', height: "200px",marginBottom:"15px" }}>

          </div>
          <div className="item" style={{ width: "60%", margin: "0 auto", border: 'solid', height: "200px",marginBottom:"15px" }}>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ indexpage }) => ({ indexpage }))(IndexPage);
