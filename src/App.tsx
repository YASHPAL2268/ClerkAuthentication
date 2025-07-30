import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={
          <>
            <SignedIn>
              <h1>Welcome! 🎉</h1>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <p>You are signed out. Go to <a href="/sign-in">Sign In</a>.</p>
            </SignedOut>
          </>
        } />
      </Routes>
    </>
  );
}
