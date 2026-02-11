import { FiEdit2, FiTrash2, FiUser } from "react-icons/fi";

const roleColors = {
  Developer: "bg-blue-100 text-blue-700",
  HR: "bg-green-100 text-green-700",
  Manager: "bg-purple-100 text-purple-700",
};

const roleIcons = {
  Developer: "💻",
  HR: "🧑‍💼",
  Manager: "📊",
};

const EmployeeCard = ({ emp, onEdit, onDelete }) => {
  const createdAt = new Date(emp.createdAt);
  const isRecent = Date.now() - createdAt.getTime() < 24 * 60 * 60 * 1000;

  return (
    <div className={
      `relative bg-white rounded-xl p-5 shadow-sm border transition-all duration-300 
       hover:shadow-lg hover:-translate-y-1 group 
       ${isRecent ? "ring-2 ring-emerald-300" : ""}`
    }>

      {/* Hover Actions */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={() => onEdit(emp)}
          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
        >
          <FiEdit2 />
        </button>
        <button
          onClick={() => onDelete(emp._id)}
          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
        >
          <FiTrash2 />
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <FiUser className="text-gray-500" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            {emp.name}
            {isRecent && (
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                  (New)
              </span>
            )}
          </h3>
          <p className="text-sm text-gray-500">{emp.email}</p>
        </div>
      </div>

      {/* Role Badge */}
      <div className="mt-2">
        <span
          className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full ${
            roleColors[emp.role] || "bg-gray-100 text-gray-600"
          }`}
        >
          <span>{roleIcons[emp.role] || "👤"}</span>
          {emp.role}
        </span>
      </div>
    </div>
  );
};

export default EmployeeCard;
