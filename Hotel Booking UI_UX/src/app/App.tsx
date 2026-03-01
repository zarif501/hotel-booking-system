import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    fetch("http://127.0.0.1:5000/rooms")
      .then(res => res.json())
      .then(data => {
        console.log("DATA FROM BACKEND:", data);
      })
      .catch(err => console.log(err));
  }, []);

  const addRoom = () => {
    console.log("CLICKED");
    
    fetch("http://127.0.0.1:5000/add_room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Test Room",
        price: 100
      })
    })
      .then(res => res.json())
      .then(data => console.log("ROOM ADDED:", data))
      .catch(err => console.log(err));
  };

 return (
   <div>
    <RouterProvider router={router} />

    <button onClick={addRoom}>
      Add Room
    </button>
  </div>
 );
}