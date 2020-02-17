window.addEventListener('DOMContentLoaded', function() {
    let addBtn = document.getElementById('btn'),
        textInput = document.querySelector('.text'),
        textOutput = document.querySelector('.list_style'),
        refresh = document.getElementById('refresh');  
    
    function createElements (text) {
    let newElem = document.createElement('p');
    let deleteSpan = document.createElement('span');
    
    deleteSpan.className = 'delete_span';
    deleteSpan.textContent = 'delete';

    newElem.className = 'block_list_p';
    newElem.textContent = text;
    newElem.appendChild(deleteSpan);

    deleteSpan.addEventListener('click', () => {
      textOutput.removeChild(newElem);
    });
   
    textOutput.appendChild(newElem);   
    }
  
    if(addBtn) {
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if(!(textInput.value === '')){
      createElements(textInput.value);
    }
  

  })
} else {

  let keys = {13: 'enter'};
  
  addEventListener('keydown', (event) => {
    if (!(textInput.value === '') && event.keyCode == 13) {
    createElements(textInput.value);
    }
  });
}
  
  textInput.addEventListener('focus', () => {
    textInput.value = '';
  });

  refresh.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

});