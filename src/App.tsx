import { useState } from "react";
import { Home } from "./pages/home";
import { Form } from "./pages/form";

const App = () => {
  const [isFormPage, setIsFormPage] = useState(false);

  return (
    <div className="mt-16">
      {!isFormPage && <Home setIsFormPage={setIsFormPage} />}
      {isFormPage && <Form setIsFormPage={setIsFormPage} />}
    </div>
  );
};

export default App;
