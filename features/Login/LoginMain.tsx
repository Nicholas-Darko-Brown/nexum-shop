import CheckOrder from "@/components/CheckOrder/CheckOrder";
import LoginForm from "@/components/Login/LoginForm";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const LoginMain = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="border-2 rounded shadow-sm md:col-span-1">
        <Tabs focusTabOnClick={false} selectedTabClassName="selectedTabClassName">
          <TabList className="grid grid-cols-2 text-center py-2">
            <Tab selectedClassName="selectedClassName" className="col-span-1 cursor-pointer">Login</Tab>
            <Tab selectedClassName="selectedClassName" className="col-span-1 cursor-pointer">Create Account</Tab>
          </TabList>

          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <h2>Create account</h2>
          </TabPanel>
        </Tabs>
      </div>
      <div className="border-2 rounded shadow-sm md:col-span-1">
        <CheckOrder />
      </div>
    </div>
  );
};

export default LoginMain;
