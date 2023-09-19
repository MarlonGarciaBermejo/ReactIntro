import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



  // Parent compontent + return
const ParentComponent = () => {
  const [savings, setSavings] = useState(100000); 

  const childRequest = (amount) => {
    if (amount <= savings) {
      setSavings(savings - amount);
    }
  }

return (
  <div>
    <h1>Parent Account</h1>
    <p>Current ammount: {savings}KR </p>
    <ChildComponent requestMoney={childRequest}/>
  </div>
)

}
  // Child compontent + return
const ChildComponent = ({ requestMoney }) => {
const [currentAmount, setAmount] = useState(0);
const [amountNeeded, setAmountNeeded] = useState(250);

const handleRequest = () => {
  if(currentAmount < amountNeeded) {
    const remainingAmount = amountNeeded - currentAmount;
    requestMoney(remainingAmount);
    setAmount(currentAmount + remainingAmount);
    setAmountNeeded(0);
  }

}

  return (
 <div>
  <h2>Kids Account</h2>
 <p>Current amount: {currentAmount}KR</p>
 <button onClick={handleRequest}>Request money</button>
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
