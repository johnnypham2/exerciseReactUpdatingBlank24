import { useState } from 'react'

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {

    const [cart, setCart] = useState({
       discount: .1,
       items: [
        {id: 1, title: 'Product 1', quantity: 1},
        {id: 2, title: 'Product 2', quantity: 1}
       ] 
    })

    const handleClick =() => {
    const updatedItems = cart.items.map(item =>
      item.id === 1 ? {...item, quantity: 2} : item
    );
      setCart({...cart, items: updatedItems}); 
    }
  return (
    <div>
    {/* Title, show items, button to handle the update */}
    {cart.items.map(item => (
        <div key={item.id}>
            <h1>{item.title}</h1>
            <h2>{item.quantity}</h2>
        </div>
    ))}
    <button onClick={handleClick}>update quantity of Product 1</button>
</div>
  )
}

export default Cart
