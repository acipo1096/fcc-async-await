let stocks = 
    {
        Fruits: ["strawberry","grapes","banana","apples"],
        liquid: ["water","ice"],
        holder: ["cone","cup","stick"],
        toppings: ["chocolate","peanuts"]
    };


let is_shop_open = true;

let order = (time,work) =>{

    return new Promise ((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                // work is getting done here
                resolve(work());

                // Setting time here for 1 work
            }, time)
            
        }
        else{
            reject(console.log("Our shop is closed"))
        }
    })

}

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
});

// The .then handler returns a Promise when our original promise is resolved
// It's similar to giving instructions to someone. 
// You tell someone to " First do this, then do that, then this other thing, then.., then.., then..."
// and so on.
// The first task is our original promise.
// The rest of the tasks return our promise once one small bit of work is completed

