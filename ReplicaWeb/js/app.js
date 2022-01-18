addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.btnMenu');
  if(btnMenu){
    btnMenu.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items');
      menu_items.classList.toggle('show');
    });
  }
})