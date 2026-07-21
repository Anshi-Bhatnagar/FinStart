import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-8 space-y-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;