import React from 'react';
import { PlusOutlined } from '@ant-design/icons'

import { Content } from './Button.styles';

const Button = ({ togglePop }) => {
    return (
        <Content>
            <PlusOutlined style={{ fontSize: '25px', color: '#08c' }} onClick={togglePop} />
        </Content>
        
    );
};

export default Button;