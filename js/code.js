function changeactive(e){
  if(e == 1){
    document.getElementById("aboutus").classList.remove("text-info");
    document.getElementById("homeid").classList.add("text-info");
  }
  else{
    document.getElementById("homeid").classList.remove("text-info");
    document.getElementById("aboutus").classList.add("text-info");
  }
  
}