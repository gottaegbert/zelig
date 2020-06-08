// Instantiate with debug turned on
const pointer = new PosenetPointer({
  debug: true,
  target: document.querySelector('#debug')
})

function startPosenetPointer () {
  const $pointer = document.querySelector('.pointer')
  document.querySelector('#demo-video').remove()
  
  // Start PoseNet Pointer
  pointer.start()
  
  // Add a "plugin" to update pointer position
  pointer.use('placePointer', poses => {
    $pointer.style.left = `${poses[0].pointedAt.x}px`
    $pointer.style.top = `${poses[0].pointedAt.y}px`
  })
  
  // Add another one to handle scrolling
  // You could do this in the same one, but keeping functionality
  // separately will allow you to toggle plugins on/off later
  pointer.use('scrollPage', poses => {
    let y = poses[0].pointedAt.y;
    if (y < 0) window.scrollTo(0, window.scrollY + y * 0.05);
    else if (y > window.innerHeight)
      window.scrollTo(0, window.scrollY + (y - window.innerHeight) * 0.05);
  })
}