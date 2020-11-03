import React, { FC } from 'react';

import Head from '../Partials/Head';
import Foot from '../Partials/Foot';
import { Layout } from 'antd';


const MainLayout: FC = (props) => {
    return (
        <div className="mainlayout">
            {/* Head Component  */}
            < Head />

            <Layout style={{ flex: 1 }}>{props.children}</Layout>

            {/* Footer Component */}
            <Foot />
        </div>
    )
};


export default MainLayout;