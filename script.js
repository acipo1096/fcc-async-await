// We use the try keyword to run our code
// while we use the catch to catch our errors

// JS Promises format

/*
function kitchen(){

  return new Promise ((resolve, reject)=>{
    if(true){
      resolve("promise is fulfilled")
    }

    else{
      reject("error caught here")
    }
  })
}

kitchen()     // run the code
   .then()    // next step
   .then()    // next step
   .catch()   // error caught here
   .finally() // end of the promise (optional)
*/

// Async, Await in JS -> try, catch

/*
async function kitchen(){

  try {
    // let's create a fake problem
    await abc;
  }

  catch(error){
    console.log("abc does not exist", error)
  }

  finally{
    console.log("Code runs anyway")
  }
}

kitchen() // run the code
*/


// The await keyword makes JS wait untill a promise settles and returns its result

function toppings_choice(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log("which topping do you want?"))
    },3000)
  })
}

async function kitchen(){
  console.log("A");
  console.log("B")
  console.log("C")

  await toppings_choice()

  console.log("D")
  console.log("E")
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders")

// We are literally going outside our kitchen to ask the customer what he or she wants
// In the meantime, other things still get done

let is_shop_open = true;

function time(ms){

  return new Promise( (resolve, reject)=>{

    if(is_shop_open == true){
      setTimeout(resolve,ms);
    }

    else{
      reject(console.log("Shop is closed"))
    }

  })
}

async function kitchen(){
  try{

    // time taken to perform this 1 task
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`)
  }

  catch(error){
    console.log("Customer left",error)
  }

  finally{
    console.log("Day ended, shop closed")
  }
}

// Trigger
kitchen();