import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

// we can change component name using as. below BrowserRouter name is changed to Router

import PageRouter from "../pages/pageRouter";

import AddForm from "../components/modal/formToadd/addForm";
import Login from "../pages/Login";

import { links } from "../data/links";

export default function App() {
  // use state:
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((prev) => !prev);
  }

  return (
    <div>
      <PageRouter links={links} />
      <IoAddCircleSharp
        onClick={handleClick}
        style={{ fontSize: "8rem", color: "green" }}
      />
      {showForm && <AddForm func={handleClick} />}
    </div>
  );
}
