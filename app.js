const myDay = document.querySelectorAll(".days_li li");
console.log(myDay)
const data = async() => {
    const res = await fetch("data.json")
    console.log(res);
    const data = await res.json()
    console.log(data);
    
      data.map(({day, amount},i)=>{
        console.log(`${day} ${amount} ${i}`)
       console.log( `myDay[${i}]`);

      console.log(myDay[i]);

console.log(myDay[i].firstElementChild.style.height =`${(amount*2).toFixed(0)}px`)
myDay[i].firstElementChild.style.backgroundColor ="hsl(10, 79%, 65%)";


      })

      
}

console.log(data());

