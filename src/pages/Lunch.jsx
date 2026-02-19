import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";

export const Lunch = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    const url =
      import.meta.env.VITE_SUPABASE_URL + "menu_items?category=eq.lunch";
    const token = import.meta.env.VITE_TOKEN;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: token,
      },
    });

    const data = await response.json();

    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      {menu.map((item) => (
        <Card key={item.id} name={item.name} price={item.price} image_url={item.image_url}/>
      ))}
    </>
  );
};