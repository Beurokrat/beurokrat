import TabNavigation from "../_components/tab-navigation";
import BacklogPage from "./blogs";
import CareersPage from "./careers";
import WorksPage from "./works";

const AdminPage = () => {
  const tabs = [
    {
      label: 'Blogs',
      value: 'blogs',
      content: <BacklogPage />,
    },
    {
      label: 'Careers',
      value: 'careers',
      content: <CareersPage />,
    },
    {
      label: 'Works',
      value: 'works',
      content: <WorksPage />,
    },
  ];

  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '150px' }}>
    <TabNavigation tabs={tabs} />
  </div>);
};

export default AdminPage;
