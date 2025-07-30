// src/pages/Home.tsx
import { SignIn } from "@clerk/clerk-react";
import RedirectToDashboard from "../components/RedirectToDashboard";

const Home = () => {
  return (
    <div>
      <RedirectToDashboard />
      <SignIn path="/sign-in" routing="path" />
      
    </div>
  );
};

export default Home;
