import { useState } from 'react'
import './App.css'

const ParentComponent = () => {

const [currentAmount, updateAmount] = useState(10000);
const childRequest = 250;

return (

<div>
<h1>Bank</h1>
<h2>Parent Savings: {currentAmount} SEK</h2>
<ChildComponent currentAmount = {currentAmount} updateAmount = {updateAmount} childRequest = {childRequest}/>
</div>

) 
}

const ChildComponent = (props) => {

const [amount, setCurrentAmount] = useState(0);
const [currentToys, updateToys] = useState(0);

const requestMoney = () => {
  
  if(props.currentAmount >= props.childRequest) {
    props.updateAmount(props.currentAmount - props.childRequest);
    setCurrentAmount(amount + props.childRequest);
  }
}

const buyToy = () => {

  if(amount >= props.childRequest) {
    setCurrentAmount(amount - props.childRequest);
    updateToys(currentToys + 1);
  }

}

  return (
    <div>
      <h2>Child Savings: {amount} SEK </h2>
      <h2>Number of Toys: {currentToys}</h2>
      <button onClick={requestMoney}>Request Money</button>
      <br/>
      <br/>
      <button onClick={buyToy}>Buy Toy</button>
    </div>
  )

}

function App() {
 
  return (
   <div>
    <ParentComponent />
   </div>
  )
}

export default App
