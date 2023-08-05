document.addEventListener('mouseover',(event)=>{
  let buttonTarget = event.target
  let message = document.createElement('div')
 
  if(buttonTarget.closest('button'))
  {
    message.innerText = event.target.dataset.tooltip
    message.classList.add('tooltip')
    let rect = buttonTarget.getBoundingClientRect()
   
    if(rect.top < 0)
      message.style.top = rect.top/2 +15+ 'px'
    else
      message.style.top = rect.top/2 + 'px'  
    message.style.left = rect.left + 'px'
    
    
    event.target.before(message)
   
  }

})
document.addEventListener('mouseout',(event)=>{
  let buttonTarget = event.target
  
  if(buttonTarget.closest('button'))
  {
    document.querySelector('.tooltip').remove()
  }
})