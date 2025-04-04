import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './shadui/tabs';

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

const TabNavigation = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <Tabs defaultValue={tabs[0].value} className='w-full max-w-4xl' orientation='horizontal'>
      <TabsList className='flex justify-center align-center'>
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
