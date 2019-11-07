import React, { Component } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
const { Meta } = Card;
class Tab1 extends Component { //BBB同理


    render() {
        let data = { name: "one", description: "这是一段描述" }
        let datas = [];
        for (let i = 0; i < 10; i++) {
            datas.push(data);
        }

        let cards = datas.map(item => {
            return <Card
                hoverable
                style={{ width: 240, marginRight: 30 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>;


        })

        return (
            <div style={{ width: '100%', height: 'auto' }}>
                <div style={{ display: 'flex', margin: '0 auto', width: '80%' ,flexWrap:'wrap',padding:65}}>
                    {cards}
                    
                </div>
            </div>
        )
    }
}

Tab1.propsTypes = {}
export default connect()(Tab1)