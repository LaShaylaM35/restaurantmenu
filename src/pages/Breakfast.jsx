import React, { useState,  useEffect } from 'react'

export const Breakfast = () => {
const [menu, setMenu] = useState([]);

  const getMenu = async () => {
  
      const url = import.meta.env.VITE_SUPABASE_URL + 'menu_items?category=eq.breakfast';
      const token = import.meta.env.VITE_TOKEN;
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'apikey': token
        }
      })
  
      const data = await response.json();
  
      setMenu(data)
  
    }
  
    
    useEffect(() => {
      getMenu();
    }, [])
  
    return (
      
      <> 
        {menu.map(item => (
  
          <Card key={item.id} name={item.name} price={item.price} />
        ))}
      </>
    )
}
