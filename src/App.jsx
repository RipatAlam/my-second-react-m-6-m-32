import Batsman from './Batsman';
import Counter from './Counter';
import './App.css'

function App() {

  function handleClick() {
    alert('Sucessfully clicked')
  }

  const handleClickTwo = () => {
    alert('Sucessfully click two')
  }

  const handleClickThree = (num) => {
    const result = num + 5;
    alert('Sucessfully Add New Number: ' + result);
  }

  return (
    <>
      <h1>Get started</h1>
      <Batsman></Batsman>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickTwo}>Click Me Two</button>
      <button onClick={() => handleClickThree(10)}>Click Me Three</button>
    </>
  )
}

export default App
