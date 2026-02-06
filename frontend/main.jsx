import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Employees />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
