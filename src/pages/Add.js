import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Add = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    name: "",
    description: "",
    price: "",
    image: "",
    author: "",
  });

  // const URL = "http://localhost:5000/books/";
  const URL = `${process.env.REACT_APP_HEROKU_URI}/books`;

  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post(URL, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate("/books"));
  };
  return (
    <div
      className={`absolute top-20 h-[90vh] w-full ${
        theme === "dark" && "dark"
      }`}
    >
      <div className="absolute top-18  h-[90vh] w-full dark:bg-[#0E1118] dark:text-slate-200      ">
        <div className="w-[90%] mx-auto text-3xl font-bold  ">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-16">
            {/*  */}
            <div className="grid xl:grid-cols-2 xl:gap-6 ">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                />
                <label className="peer-focus:font-medium absolute text-sm     duration-300  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title
                </label>
              </div>
              {/*  */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  name="author"
                  value={inputs.author}
                  onChange={handleChange}
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Author
                </label>
              </div>
            </div>
            {/*  */}
            <div className=" grid grid-cols-1 ">
              <div className="relative z-0 w-full mb-6 group">
                <textarea
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm      bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}
                />
                <label className="peer-focus:font-medium absolute text-sm       duration-300  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Description
                </label>
              </div>
            </div>
            {/*  */}
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  name="price"
                  value={inputs.price}
                  onChange={handleChange}
                />
                <label className="peer-focus:font-medium absolute text-sm       duration-300  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Price
                </label>
              </div>
              {/*  */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm      bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  name="image"
                  value={inputs.image}
                  onChange={handleChange}
                />
                <label className="peer-focus:font-medium absolute text-sm       duration-300  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Image
                </label>
              </div>
            </div>
            {/*  */}

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium      dark:text-gray-300">
                Available
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
