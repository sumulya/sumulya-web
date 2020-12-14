import React, { FC } from 'react';
import './../../App.css';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { NotificationOutlined, FireOutlined, AppleFilled, UserOutlined, ShopOutlined, CoffeeOutlined, ClearOutlined, MedicineBoxOutlined, FunnelPlotOutlined, HeartFilled } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

const Side: FC = () => (
    <Sider width={270} style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
    }}>
        <Menu
            mode="inline"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', paddingTop: '50px' }}
        ><h3 style={{ margin: "20px 10px" }}>All Categories</h3>
            <SubMenu key="sub1" icon={<AppleFilled />} style={{ fontWeight: "bold" }} title="Vegetables &amp; Fruits">
                <Menu.Item key="1"><Link to="/category/1">-Fruits</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/category/2">-Vegetables</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/category/3">-Gundruk &amp; Sinki</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} style={{ fontWeight: "bold" }} title="Personal Care">
                <Menu.Item key="4"><Link to="/category/4">-Hygiene</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/category/5">-Bath &amp; Body</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/category/6">-Face Care</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/category/7">-Cosmetics</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/category/8">-Hair Care</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/category/9">-Skin Care</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ShopOutlined />} style={{ fontWeight: "bold" }} title="Household Items">
                <Menu.Item key="10"><Link to="/category/10">Cleaners</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/category/11">-Cleaning Tools</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/category/12">-DishWasher</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/category/13">-Fresheners</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/category/14">-Laundry</Link></Menu.Item>
                <Menu.Item key="15"><Link to="/category/15">-Shoe Care</Link></Menu.Item>
                <Menu.Item key="16"><Link to="/category/16">-Gas</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<FireOutlined />} style={{ fontWeight: "bold" }} title="Biscuits Snacks &amp; Chocolates">
                <Menu.Item key="17"><Link to="/category/17">-Biscuits &amp; cookies</Link></Menu.Item>
                <Menu.Item key="18"><Link to="/category/18">-Chips &amp; Crispies</Link></Menu.Item>
                <Menu.Item key="19"><Link to="/category/19">-Namkeens &amp; Snacks</Link></Menu.Item>
                <Menu.Item key="20"><Link to="/category/20">-Chocolates &amp; Candies</Link></Menu.Item>
                <Menu.Item key="21"><Link to="/category/21">-Sweets</Link></Menu.Item>
                <Menu.Item key="22"><Link to="/category/22">-Noodles</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<CoffeeOutlined />} style={{ fontWeight: "bold" }} title="Beverages">
                <Menu.Item key="23"><Link to="/category/23">-Juices &amp; Drinks</Link></Menu.Item>
                <Menu.Item key="24"><Link to="/category/24">-Health &amp; Energy Drinks</Link></Menu.Item>
                <Menu.Item key="25"><Link to="/category/25">-Tea &amp; Coffee</Link></Menu.Item>
                <Menu.Item key="26"><Link to="/category/26">-Milk Drinks</Link></Menu.Item>
                <Menu.Item key="27"><Link to="/category/27">-Water &amp; Soda</Link></Menu.Item>
                <Menu.Item key="28"><Link to="/category/28">-Alcohol &amp; Tobaccos</Link></Menu.Item>
                <Menu.Item key="29"><Link to="/category/29">-Cold Drinks</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<MedicineBoxOutlined />} style={{ fontWeight: "bold" }} title="Baby &amp; Care">
                <Menu.Item key="30"><Link to="/category/30">-Baby Accessories</Link></Menu.Item>
                <Menu.Item key="31"><Link to="/category/31">-Diper &amp; Wipes</Link></Menu.Item>
                <Menu.Item key="32"><Link to="/category/32">-Baby Food</Link></Menu.Item>
                <Menu.Item key="33"><Link to="/category/33">-Baby Skin &amp; Hair Care</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<FunnelPlotOutlined />} style={{ fontWeight: "bold" }} title="BreakFast &amp; Dairy">
                <Menu.Item key="34"><Link to="/category/34">-Bread &amp; Egg</Link></Menu.Item>
                <Menu.Item key="35"><Link to="/category/35">-Milk &amp; Milk Products</Link></Menu.Item>
                <Menu.Item key="36"><Link to="/category/36">-Butter,Cheese &amp; Paneer</Link></Menu.Item>
                <Menu.Item key="37"><Link to="/category/37">-Cereal &amp; Mixes</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" icon={<HeartFilled />} style={{ fontWeight: "bold" }} title="Health Foods">
                <Menu.Item key="38"><Link to="/category/38">-Chyawanprash</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" icon={<ClearOutlined />} style={{ fontWeight: "bold" }} title="Grocery &amp; Staples">
                <Menu.Item key="39"><Link to="/category/39">-Pulses</Link></Menu.Item>
                <Menu.Item key="40"><Link to="/category/40">-Atta &amp; Flours</Link></Menu.Item>
                <Menu.Item key="41"><Link to="/category/41">-Rice &amp; Rice Products</Link></Menu.Item>
                <Menu.Item key="42"><Link to="/category/42">-Spices &amp; Masalas</Link></Menu.Item>
                <Menu.Item key="43"><Link to="/category/43">-Cooking Oil</Link></Menu.Item>
                <Menu.Item key="44"><Link to="/category/44">-Dry Fruits &amp; Nuts</Link></Menu.Item>
                <Menu.Item key="45"><Link to="/category/45">-Ghee</Link></Menu.Item>
                <Menu.Item key="46"><Link to="/category/46">-Salt &amp; Sugar</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" icon={<NotificationOutlined />} style={{ fontWeight: "bold" }} title="Jams, Honey, Spreads &amp; Sauces">
                <Menu.Item key="47"><Link to="/category/47">-Honey</Link></Menu.Item>
                <Menu.Item key="48"><Link to="/category/48">-Jams</Link></Menu.Item>
                <Menu.Item key="49"><Link to="/category/49">-Pasta &ammp; Soup</Link></Menu.Item>
                <Menu.Item key="50"><Link to="/category/50">-Pickles</Link></Menu.Item>
                <Menu.Item key="51"><Link to="/category/51">-Sauces</Link></Menu.Item>
                <Menu.Item key="52"><Link to="/category/52">-Spreads</Link></Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
);


export default Side;
