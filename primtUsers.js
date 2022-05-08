const users = [
  {name :'a'},{name :'b'},{name :'c'},{name :'d'},{name :'e'}
              ]

   
  function print(t){
    let pr = new Promise((resolve) =>{
      setTimeout(function(){
        console.log('hello '+t);
        resolve();
      },1000);
    })
    return pr;
 }
 
  async function printUsers(u){
   for(let user of u){
        await print(user.name);    
      
   }
 }


printUsers(users);
