import React, { useState } from 'react'
import { Menu, SubMenu } from 'antd';
import { HomeOutlined, UserOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import Home from '../../pages/Home';

const Header = () => {

    const { SubMenu } = Menu;

    const [current, setCurrent] = useState("home");

    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: 'Home',
            key: 'home',
            icon: <HomeOutlined />,

        },

        {
            label: 'Username',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                },
            ],
        },

        {
            label: 'Register',
            key: 'register',
            icon: <UserAddOutlined />,
            style: "float-right"
        },
        {
            label: 'Login',
            key: 'login',
            icon: <UserOutlined />,
            class: "float-right"
        },


        // {
        //     label: (
        //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        //             Navigation Four - Link
        //         </a>
        //     ),
        //     key: 'alipay',
        // },
    ];

    return (

        <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>



            <SubMenu key='submenu' icon={<SettingOutlined />} title="Username">

                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>

            </SubMenu>

            <Menu.Item key="register" icon={<UserAddOutlined />} style={{ marginLeft: 'auto' }}>
                Register
            </Menu.Item>

            <Menu.Item key="login" icon={<UserOutlined />}>
                Login
            </Menu.Item>

        </Menu>

    )
}

export default Header