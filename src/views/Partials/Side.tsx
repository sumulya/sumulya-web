import React, { FC } from 'react';
import './../../App.css';
import { Menu, Layout } from 'antd';
import { NotificationOutlined, AppleFilled, UserOutlined, ShoppingOutlined, CoffeeOutlined, ClearOutlined, MedicineBoxOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

const Side: FC = () => (
    <Sider width={270} style={{ height: "fit-content" }}>
        <Menu
            mode="inline"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
        ><h3 style={{ margin: "20px 10px" }}>All Categories</h3>
            <SubMenu key="sub1" icon={<AppleFilled />} style={{ fontWeight: "bold" }} title="Vegetables &amp; Fruits">
                <Menu.Item key="1">-Fruits</Menu.Item>
                <Menu.Item key="2">-Vegetables</Menu.Item>
                <Menu.Item key="3">-Gundruk &amp; Sinki</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} style={{ fontWeight: "bold" }} title="Personal Care">
                <Menu.Item key="4">-Hygiene</Menu.Item>
                <Menu.Item key="5">-Bath &amp; Body</Menu.Item>
                <Menu.Item key="6">-Face Care</Menu.Item>
                <Menu.Item key="7">-Cosmetics</Menu.Item>
                <Menu.Item key="8">-Hair Care</Menu.Item>
                <Menu.Item key="9">-Skin Care</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ShoppingOutlined />} style={{ fontWeight: "bold" }} title="Household Items">
                <Menu.Item key="10">Cleaners</Menu.Item>
                <Menu.Item key="11">-Cleaning Tools</Menu.Item>
                <Menu.Item key="12">-DishWasher</Menu.Item>
                <Menu.Item key="13">-Fresheners</Menu.Item>
                <Menu.Item key="14">-Laundry</Menu.Item>
                <Menu.Item key="15">-Shoe Care</Menu.Item>
                <Menu.Item key="16">-Gas</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<NotificationOutlined />} style={{ fontWeight: "bold" }} title="Biscuits Snacks &amp; Chocolates">
                <Menu.Item key="17">-Biscuits &amp; cookies</Menu.Item>
                <Menu.Item key="18">-Chips &amp; Crispies</Menu.Item>
                <Menu.Item key="19">-Namkeens &amp; Snacks</Menu.Item>
                <Menu.Item key="20">-Chocolates &amp; Candies</Menu.Item>
                <Menu.Item key="21">-Sweets</Menu.Item>
                <Menu.Item key="22">-Noodles</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<CoffeeOutlined />} style={{ fontWeight: "bold" }} title="Beverages">
                <Menu.Item key="23">-Juices &amp; Drinks</Menu.Item>
                <Menu.Item key="24">-Health &amp; Energy Drinks</Menu.Item>
                <Menu.Item key="25">-Tea &amp; Coffee</Menu.Item>
                <Menu.Item key="26">-Milk Drinks</Menu.Item>
                <Menu.Item key="27">-Water &amp; Soda</Menu.Item>
                <Menu.Item key="28">-Alcohol &amp; Tobaccos</Menu.Item>
                <Menu.Item key="29">-Cold Drinks</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<MedicineBoxOutlined />} style={{ fontWeight: "bold" }} title="Baby &amp; Care">
                <Menu.Item key="30">-Baby Accessories</Menu.Item>
                <Menu.Item key="31">-Diper &amp; Wipes</Menu.Item>
                <Menu.Item key="32">-Baby Food</Menu.Item>
                <Menu.Item key="33">-Baby Skin &amp; Hair Care</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<NotificationOutlined />} style={{ fontWeight: "bold" }} title="BreakFast &amp; Dairy">
                <Menu.Item key="34">-Bread &amp; Egg</Menu.Item>
                <Menu.Item key="35">-Milk &amp; Milk Products</Menu.Item>
                <Menu.Item key="36">-Butter,Cheese &amp; Paneer</Menu.Item>
                <Menu.Item key="37">-Cereal &amp; Mixes</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" icon={<NotificationOutlined />} style={{ fontWeight: "bold" }} title="Health Foods">
                <Menu.Item key="38">-Chyawanprash</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" icon={<ClearOutlined />} style={{ fontWeight: "bold" }} title="Grocery &amp; Staples">
                <Menu.Item key="39">-Pulses</Menu.Item>
                <Menu.Item key="40">-Atta &amp; Flours</Menu.Item>
                <Menu.Item key="41">-Rice &amp; Rice Products</Menu.Item>
                <Menu.Item key="42">-Spices &amp; Masalas</Menu.Item>
                <Menu.Item key="43">-Cooking Oil</Menu.Item>
                <Menu.Item key="44">-Dry Fruits &amp; Nuts</Menu.Item>
                <Menu.Item key="45">-Ghee</Menu.Item>
                <Menu.Item key="46">-Salt &amp; Sugar</Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" icon={<NotificationOutlined />} style={{ fontWeight: "bold" }} title="Jams, Honey, Spreads &amp; Sauces">
                <Menu.Item key="47">-Honey</Menu.Item>
                <Menu.Item key="48">-Jams</Menu.Item>
                <Menu.Item key="49">-Pasta &ammp; Soup</Menu.Item>
                <Menu.Item key="50">-Pickles</Menu.Item>
                <Menu.Item key="51">-Sauces</Menu.Item>
                <Menu.Item key="51">-Spreads</Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
);


export default Side;
