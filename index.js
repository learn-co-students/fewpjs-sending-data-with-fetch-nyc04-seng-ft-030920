// Add your code here



fetch("http://localhost:3000/dogs", {
 method: "POST", 
 headers: {
     "Content-Type" : "application/json", 
     "Accept" : "application/json"
 },
 body: JSON.stringify({
     dogName: "Byron", 
     dogBreed: "Poodle"
 })




}).then(function(response) {
    return response.json();
}).then(function(object) {
    console.log(object)
}).catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });



  function submitData(name , email)  {

   return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
           "Accept" : "application/json"
      },
      body: JSON.stringify({name: name , 
        email: email})
  }).then(function(response) {
      return response.json()
  }).then(function(response){
    
    
    body.innerHTML = response.id
  }).catch(function(error){
    body.innerHTML = error.message
  })

  

}

submitData("Xavier" , "xaviercarty@gmail.com")