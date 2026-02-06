import { toast } from "react-toastify";

const roleColors = {
  Developer: "bg-purple-100 text-purple-700",
  HR: "bg-green-100 text-green-700",
  Manager: "bg-orange-100 text-orange-700",
};

const EmployeeCard = ({ emp, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex justify-between items-center">
      {/* Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {emp.name}
        </h3>
        <p className="text-sm text-gray-500">{emp.email}</p>

        <span
          className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium ${
            roleColors[emp.role] || "bg-gray-100 text-gray-600"
          }`}
        >
          {emp.role}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(emp)}
          className="px-4 py-1.5 text-sm rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(emp._id)}
          className="px-4 py-1.5 text-sm rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
