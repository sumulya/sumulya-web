import React, { FC } from 'react';
import { Layout } from 'antd';

import Head from '../Partials/Head';
import Foot from '../Partials/Foot';
import MainRoute from '../../routes';

const MainLayout: FC = (props) => (
    <div className="mainlayout">
        <Layout>
            <Head />

            <MainRoute />

            <Foot />
        </Layout>
    </div>
);


export default MainLayout;