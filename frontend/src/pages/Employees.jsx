import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeApi";
import AddEmployee from "../components/AddEmployee";
import EmployeeCard from "../components/EmployeeCard";
import { toast } from "react-toastify";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Dashboard stats
  const totalEmployees = employees.length;
  const developers = employees.filter(emp => emp.role === "Developer").length;
  const hr = employees.filter(emp => emp.role === "HR").length;
  const managers = employees.filter(emp => emp.role === "Manager").length;

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      toast.error("Failed to load employees");
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?"))
      return;

    try {
      await deleteEmployee(id);
      toast.success("Employee deleted successfully");
      loadEmployees();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "all" || emp.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Employee Management System
          </h1>
          <p className="text-gray-500 mt-1">
            HR dashboard to manage employees
          </p>
        </div>

        {/* Dashboard Stats */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-sm text-gray-500">Total Employees</p>
    <h3 className="text-3xl font-bold text-gray-800">
      {totalEmployees}
    </h3>
  </div>

  <div className="bg-blue-50 p-5 rounded-xl shadow">
    <p className="text-sm text-blue-600">Developers</p>
    <h3 className="text-3xl font-bold text-blue-700">
      {developers}
    </h3>
  </div>

  <div className="bg-green-50 p-5 rounded-xl shadow">
    <p className="text-sm text-green-600">HR</p>
    <h3 className="text-3xl font-bold text-green-700">
      {hr}
    </h3>
  </div>

  <div className="bg-purple-50 p-5 rounded-xl shadow">
    <p className="text-sm text-purple-600">Managers</p>
    <h3 className="text-3xl font-bold text-purple-700">
      {managers}
    </h3>
  </div>
</div>

        {/* Add / Edit */}
        <AddEmployee
          refresh={loadEmployees}
          editing={editing}
          setEditing={setEditing}
        />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 border rounded-lg px-4 py-2"
          />

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="w-full md:w-1/4 border rounded-lg px-4 py-2"
          >
            <option value="all">All Roles</option>
            <option value="Developer">Developer</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {/* Employees */}
        {filteredEmployees.length === 0 ? (
          <p className="text-gray-500">No employees found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEmployees.map((emp) => (
              <EmployeeCard
                key={emp._id}
                emp={emp}
                onEdit={setEditing}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;
