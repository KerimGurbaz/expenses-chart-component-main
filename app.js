const data = async() => {
    const res = await fetch("data.json")
    console.log(res);
    const data = await res.json()
    console.log(data);
   
   let a =  data.forEach(x => { day, amount} )
   console.log(a);


      const {day, amount} = data;
      

      console.log(day);
      console.log(amount);
}

console.log(data());