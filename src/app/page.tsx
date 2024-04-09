import React from "react";


import Feed from "@/components/Feed/Feed";
import Sidebar from '@/components/Sidebar/Sidebar';

import Header from "@/components/Serach/Head";
import Stories from "@/components/Stories/stories";



export default function page() {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden lg:block col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-11 ">
        <Header />
        <Stories />
        <Feed />
      </div>
      
      
    </div>
  );
}