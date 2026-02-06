import { useEffect, useState } from "react";
import { addEmployee, updateEmployee } from "../services/employeeApi";
import { toast } from "react-toastify";

const AddEmployee = ({ refresh, editing, setEditing }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name,
        email: editing.email,
        role: editing.role,
      });
    }
  }, [editing]);

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (editing) {
        await updateEmployee(editing._id, form);
        toast.success("Employee updated successfully");
        setEditing(null);
      } else {
        await addEmployee(form);
        toast.success("Employee added successfully");
      }

      setForm({ name: "", email: "", role: "" });
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-xl shadow-sm border p-6 mb-8"
    >
      <h3 className="text-lg font-semibold mb-4">
        {editing ? "Edit Employee" : "Add New Employee"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="border rounded-lg p-2"
          placeholder="Name"
          value={form.name}
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          className="border rounded-lg p-2"
          placeholder="Email"
          value={form.email}
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="border rounded-lg p-2"
          placeholder="Role"
          value={form.role}
          required
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        />
      </div>

      <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
        {editing ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};

export default AddEmployee;
