import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const OrderForm = () => {

  let name = "";
  let order_details = "";

  const navigate = useNavigate();

  const [result, setResult] = useState("");

  const onChangeName = (e)=>{
    const {value} = e.target;
    name = value;
  }

  const onChangeOrder = (e)=>{
    const {value} = e.target;
    order_details = value;
  }

  const handleSubmit = async ()=>{

    event.preventDefault();

    const url = import.meta.env.VITE_SUPABASE_URL + "orders";
    const token = import.meta.env.VITE_TOKEN;
    const order = {
      name, 
      order_details
    }

    console.log(order)


    const response = await fetch(url, 
      {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
          'apikey' : token
        },
        body: JSON.stringify(order)
      }
    )

    if (response.ok){
      setResult("Order Created")
      
      setTimeout(()=>{
        navigate("/")
      }, 2000)
      
    }else{
      setResult("Error in Order")
    }


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={onChangeName} />
        </div>

        <div className="mb-3">
          <label className="form-label">Order</label>
          <textarea type="text" className="form-control" onChange={onChangeOrder} />
        </div>

        <button className='btn btn-success'>Send Order</button>
      </form>

      <p className='mt-3'>{result}</p>
    </>
  )
}