import { useEffect } from "react";
import Registration from "../pages/Registration";
import { useNavigate } from "react-router-dom";

const DefaultPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedFormData = localStorage.getItem("registrationData");
    const storedCategory = localStorage.getItem("selectedCategories");

    if (storedFormData && storedCategory) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <div>
      <Registration />
    </div>
  );
};

export default DefaultPage;
