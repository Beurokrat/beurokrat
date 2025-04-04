import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './shadui/tabs';

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

const TabNavigation = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabNavigation;
