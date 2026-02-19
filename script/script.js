
function addQuestion(){
  const element=document.getElementById('inputFields')
  const wrapper=document.createElement('div');
  const inputField=document.createElement('input');
  const rmvbtn= document.createElement('button');
  
  inputField.type='text';
  inputField.placeholder='enter value';
  inputField.classList.add('input-field');
  
  rmvbtn.textContent='x';
  rmvbtn.style.marginLeft='15px';
  rmvbtn.addEventListener('click', function(){
    wrapper.remove();
  });

  wrapper.appendChild(inputField);
  wrapper.appendChild(rmvbtn);
  element.appendChild(wrapper);
}
