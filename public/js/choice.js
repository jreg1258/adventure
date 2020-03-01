const optionA = $("#a")
const optionB = $("#b")
const gameSpace = $("#gameSpace")
const a = optionA.val().trim()
const b = optionB.val().trim()



$(gameSpace).on("submit", (event)=>{
    event.preventDefault()
    const choice = $(document.activeElement).val()
    
    $.get("/"+choice, (data)=>{
        id: data
    }).then(()=>{
        window.location.href = "/"+choice;
      })
})

  
