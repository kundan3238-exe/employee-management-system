const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-xl font-semibold">
        Employee Management System
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
