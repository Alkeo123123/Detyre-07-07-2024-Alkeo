let personi = {
    CurrentBalance: "300"
  };
  
  function Detyra(person, withdraw) {
    let Balance = parseInt(person.CurrentBalance);
    if (Balance >= withdraw) {
      console.log(`Ti ke para te mjaftueshme per te terhequr ${withdraw}. Balanca e re: ${Balance - withdraw}`);
    } else {
      console.log(`Nuk ke para te mjaftueshme per kete transaksion, te duhen ${withdraw - Balance} para per te perfunduar transaksionin.`);
    }
  }
    Detyra(personi, 200);