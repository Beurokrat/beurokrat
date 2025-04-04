import TabNavigation from "../_components/tab-navigation";

const AdminPage = () => {
  const tabs = [
    {
      label: 'Blogs',
      value: 'blogs',
      content: <div>Manage Blogs</div>,
    },
    {
      label: 'Careers',
      value: 'careers',
      content: <div>Manage Careers</div>,
    },
    {
      label: 'Works',
      value: 'works',
      content: <div>Manage Works</div>,
    },
  ];

  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '150px' }}>
    <TabNavigation tabs={tabs} />
  </div>);
};

export default AdminPage;
