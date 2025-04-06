import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser.jsx";
import UserList from "./UserList.jsx";
import UserCard from "./UserCard.jsx";
import UserModule from "./UserModule.jsx";  // We will create this component for the parent route

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<App />} />

        {/* Route for the CreateUser page */}
        <Route path="/CreateUser" element={<CreateUser />} />

        {/* Route for the UserList page */}
        <Route path="/UserList" element={<UserList />} />

        {/* Route for the UserCard page */}
        <Route path="/UserCard" element={<UserCard />} />

        {/* Nested Routes for the user module */}
        <Route path="user" element={<UserModule />}>
          {/* Nested Route for User List */}
          <Route index element={<UserList />} />
          {/* Nested Route for Create User */}
          <Route path="createuser" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
