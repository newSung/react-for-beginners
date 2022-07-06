import React, { useState ,useEffect} from "react";

function App() {
  const [loading, setLloading] = useState(true);
  const [coins, setCoins] =useState([]);
  const [coin, setCoin] =useState("");
  const [money, setMoney] = useState("");
  const cal = document.getElementById("calculate");
  const mon = document.getElementById("money");
  const onChange = (event)=>{
    if(event.target.selectedIndex !== 0){
    const idx = event.target.selectedIndex;
    mon.value="";
    setCoin(coins[idx-1].quotes.USD.price);
    }
  }
  const onChange2 = (event)=>{
    setMoney(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log(money)
    console.log(coin)
    cal.value = `${money*coin} Coins`
  }
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json()
    .then((json)=>{
      setCoins(json);
      setLloading(false);
    }));
  },[]);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : <select 
      onChange={onChange}>
        <option key="first" id="first" >Choose Coin</option>
        {coins.map((coin)=> 
        <option id = {coin.id} key={coin.id}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
          </option>)}
      </select>}
      <form onSubmit={onSubmit}>
        <div>
          <input id = "money" onChange = {onChange2} type="number" placeholder="write USD"/>
        </div>
        <div>
          <input id="calculate"  value="" placeholder="Select coin" disabled/>
        </div>
        <button >Change</button>
      </form>
    </div>
  );
}

export default App;
