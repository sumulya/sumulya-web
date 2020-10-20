import React, { FC } from 'react';

import Head from '../Partials/Head';
import Foot from '../Partials/Foot';


const MainLayout: FC = () => (
    <div className="mainlayout">
        {/* Head Component  */}
        < Head />



        {/* Footer Component */}
        <Foot />
    </div>
);


export default MainLayout;