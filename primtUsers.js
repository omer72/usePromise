const users = [
  {name :'a'},{name :'b'},{name :'c'},{name :'d'},{name :'e'}
              ]

  function print(t){
   
     setTimeout(function(){
       console.log('User '+t);
       
     },4000);
   
   
}

 function printUsers(u){
  for(let user of u){
       print(user.name);    
     
  }
}


printUsers(users);
