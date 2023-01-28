const inp = document.getElementById("inp")
const par = document.getElementById("status")
const bord = document.getElementById("bord")

function notify() {
    
    const targetElement = document.getElementById("sa");

    targetElement.classList.remove("load");
            window.requestAnimationFrame(() => {
            targetElement.classList.add("load");
            })
        
       
        setTimeout(() => {
            bord.style.display ='block'
        })
       
        setTimeout(() => {
            if(inp.value.includes("@yahoo.com") || inp.value.includes("@gmail.com")) {
                bord.style.display ='none'
                par.innerHTML = "<span style='color:green'>Success</span>"

            } else if(inp.value == "") {
                bord.style.display ='none'
                par.innerHTML = "<span style='color:red'>Please input your email</span>"
            } 
            else {
                bord.style.display ='none'
                par.innerHTML = "<span style='color:red'>Invalid Email</span>"
            
            }
        }, 2000)
    
}
