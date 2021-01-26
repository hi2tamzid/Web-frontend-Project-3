function changeactive(e){
  if(e == 1){
    document.getElementById("aboutus").classList.remove("text-info");
    document.getElementById("servicesid").classList.remove("text-info");
    document.getElementById("contactid").classList.remove("text-info");
    document.getElementById("homeid").classList.add("text-info");
  }
  else if(e == 2){
    document.getElementById("homeid").classList.remove("text-info");
    document.getElementById("aboutus").classList.add("text-info");
    document.getElementById("servicesid").classList.remove("text-info");
    document.getElementById("contactid").classList.remove("text-info");
  }
  else if(e == 3){
    document.getElementById("homeid").classList.remove("text-info");
    document.getElementById("aboutus").classList.remove("text-info");
    document.getElementById("servicesid").classList.add("text-info");
    document.getElementById("contactid").classList.remove("text-info");
  }
  else if(e == 4){
    document.getElementById("homeid").classList.remove("text-info");
    document.getElementById("aboutus").classList.remove("text-info");
    document.getElementById("servicesid").classList.remove("text-info");
    document.getElementById("contactid").classList.add("text-info");
  }
}