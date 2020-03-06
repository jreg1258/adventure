const optionA = $("#a")
const optionB = $("#b")
const playerSpace = $("#playerSpace")
const a = optionA.val().trim()
const b = optionB.val().trim()
let sprite; //we will use this variable to clear the setInterval()

const stopAnimate = ()=>{
    clearInterval(sprite);
};

const animateScript = ()=>{
    let position = 256; //start position for the image slicer

    sprite = setInterval(()=>{
        document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;  
            if (position < 1536)
                { position = position + 256;}//we increment the position by 256 each time
            else
                { position = 256; }//reset the position to 256px, once position exceeds 1536px
},100)};

$(playerSpace).on("submit", (event)=>{
    event.preventDefault()
    const choice = $(document.activeElement).val();
    const text = $(document.activeElement).text();

    $.post("/"+choice,{choice:text}, ()=>{
    })

    $.get("/"+choice, (data)=>{
        id: data
    }).then(()=>{
        window.location.href = "/"+choice;
      });
})