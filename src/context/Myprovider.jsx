import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const mycontext = createContext();

function Myprovider({ children }) {
  const navigate = useNavigate();
  const [name, setname] = useState("sachin");
  const [notes, setnotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("usertoken");
      if (!token) {
        alert("Token is not presented");
        navigate("/");
        return;
      }
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:4000/note/notes",
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setnotes(response.data.response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [navigate]);

  async function deletenote(val) {
    const token = localStorage.getItem("usertoken");
    try {
      const response = await axios.delete(
        `http://localhost:4000/note/notes/${val._id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        alert("Deleted successfully");
        setnotes((prev) => prev.filter((note) => note._id !== val._id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <mycontext.Provider
      value={{
        name,
        setname,
        notes,
        setnotes,
        loading,
        setLoading,
        deletenote,
      }}
    >
      {children}
    </mycontext.Provider>
  );
}

export default Myprovider;
