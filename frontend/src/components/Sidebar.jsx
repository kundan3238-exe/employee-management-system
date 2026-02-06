const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 text-xl font-bold text-blue-600">
        EMS Pro
      </div>

      <nav className="px-4 space-y-2">
        <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50">
          Dashboard
        </button>
        <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50">
          Employees
        </button>
        <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50">
          Add Employee
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
