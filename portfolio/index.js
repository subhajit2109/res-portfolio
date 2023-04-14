console.log("script running......")
document.querySelector('.crossb').style.display = 'none';
document.querySelector('.burger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
      document.querySelector('.hamb').style.display = 'inline'
      document.querySelector('.crossb').style.display = 'none'

    }
  else{
    document.querySelector('.hamb').style.display = 'none'
    setTimeout(() => {
    document.querySelector('.crossb').style.display = 'inline'
  }, 350);
}

})