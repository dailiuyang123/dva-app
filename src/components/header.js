import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import style from './header.css';


class Header extends Component {
  render() {
    return (
      <div >
        <div className={style.logo} >
          dva react project
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', textAlign: 'center' }}
        >
          <Menu.Item key="1">
            <Link to="/"><Icon type="poweroff" />首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/tab1">tab one</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/tab2">tab two</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/tab2">tab three</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/tab2">tab four</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Header;