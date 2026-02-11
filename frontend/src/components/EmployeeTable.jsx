import { Pencil, Trash2 } from "lucide-react";
import RoleBadge from "./RoleBadge";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="text-slate-500">
            <th className="text-left px-6 py-4 font-medium">Name</th>
            <th className="text-left px-6 py-4 font-medium">Email</th>
            <th className="text-left px-6 py-4 font-medium">Role</th>
            <th className="text-right px-6 py-4 font-medium">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp._id}
              className="group border-t hover:bg-slate-50 transition"
            >
              <td className="px-6 py-4 font-medium">{emp.name}</td>
              <td className="px-6 py-4 text-slate-600">{emp.email}</td>
              <td className="px-6 py-4">
                <RoleBadge role={emp.role} />
              </td>
              <td className="px-6 py-4 text-right">
                <div className="opacity-0 group-hover:opacity-100 transition flex justify-end gap-4">
                  <button
                    onClick={() => onEdit(emp)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(emp._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
