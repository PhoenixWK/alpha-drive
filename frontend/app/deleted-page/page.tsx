import Header from "@/components/Header";
import Sidebar from "@/components/sidebars/Sidebar";

export default function DeletedPage() {
  return (
    <div className="bg-white dark:bg-[#171725] flex flex-row h-screen">
      <Sidebar />
      <div className="w-full flex flex-col h-screen">
        <div className="h-fit px-6 py-10">
          <Header />
        </div>       
        <main className="flex flex-col h-screen px-6">     
          Deleted page
        </main>
      </div>
    </div>
  );
}