import Admin from "../components/admin/Admin";
import Category from "../components/category/Category";
import Home from "../components/home/Home";
import Question from "../components/question/Question";

const Routes = [
  {
    path: "/",
    element: <Home name="Home" />,
  },
  {
    path: "/question",
    element: <Question name="Question" />,
  },
  {
    path: "/category",
    element: <Category name="Category" />,
  },
  {
    path: "/admin",
    element: <Admin name="Admin" />,
  },
];

export default Routes;
