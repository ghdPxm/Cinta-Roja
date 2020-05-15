function mensaje(callback) {
    callback()
    
}

mensaje(function() {
  console.log("Hola desde un callback")  
})


