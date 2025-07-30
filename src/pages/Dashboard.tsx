// src/pages/Dashboard.tsx
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  return <h1>Welcome to your Dashboard</h1>;
};

export default Dashboard;
