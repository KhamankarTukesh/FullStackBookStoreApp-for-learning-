import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Remove user
      setAuthUser({ user: null });
      localStorage.removeItem("Users");

      // Toast
      toast.success("Logout Successfully");

      // Close modal (dialog)
      const modal = document.getElementById("my_modal_3");
      if (modal) modal.close();

      // Reload page after 3 sec
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (e) {
      toast.error("Error: " + e.message);
    }
  };

  return (
    <div className="p-4">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
