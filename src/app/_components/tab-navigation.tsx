'use client';

import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { Tabs, TabsContent, TabsList, TabsTrigger } from './shadui/tabs';
import { Button } from './shadui/button';
import { LogOutIcon } from 'lucide-react';

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

const TabNavigation = ({ tabs }: { tabs: Tab[] }) => {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleLogout = async () => {
    try {
      // Send a DELETE request to the logout API
      await fetch('/api/admin/auth', {
        method: 'DELETE',
      });

      // Navigate to the login page
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <Tabs defaultValue={tabs[0].value} className="max-w-4xl" orientation="horizontal">
        <div className="flex items-center justify-between w-full mb-4 px-6">
          {/* Tabs List */}
          <TabsList className="flex justify-center align-center w-full">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Button on the right */}
          <Button
            className="px-4 py-6 bg-red-500 text-white rounded-[150px] hover:bg-red-200 transition duration-300"
            title="Logout"
            onClick={handleLogout} // Attach the logout handler
          >
            <LogOutIcon />
          </Button>
        </div>

        {/* Tabs Content */}
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabNavigation;
