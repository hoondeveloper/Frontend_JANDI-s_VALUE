import React from 'react';
import Header from 'components/layout/header/Header';
import { Divider } from 'antd';
import { IDashboardData } from 'models/DashboardModel';
import History from 'components/dashboard/History';
import styled from '@emotion/styled';
import Tendency from 'components/dashboard/Tendency';
import Footer from 'components/layout/footer/Footer';
import Analytics from 'components/dashboard/Analytics';

interface IDashboardProps {
  data: IDashboardData;
}

const DashboardWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  background: white;
`;

const Contents = styled.div`
  padding: 15px 16px;
`;

const Dashboard: React.FC<IDashboardProps> = ({ data }) => {
  return (
    <DashboardWrapper>
      <Header profile={data.profile} repository={data.repository} />
      <Contents>
        <History history={data.history} />
        <Divider />
        <Tendency tendency={data.tendency} username={data.profile.username} />
        <Divider />
        <Analytics analytics={data.analytics} />
      </Contents>
      <Footer />
    </DashboardWrapper>
  );
};

export default Dashboard;
