const btn=document.querySelector("#transition");
     
    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }
    document.querySelector("#transition").addEventListener("mousemove", throttleFunction((dets)=>{
      var div = document.createElement("div")
      div.classList.add("imgdiv")
      div.style.left = dets.clientX + "px"
      div.style.top = dets.clientY + "px"

      var img = document.createElement("img")
      img.setAttribute("src", "https://images.unsplash.com/photo-1627645835237-0743e52b991f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")
      div.appendChild(img)

      document.body.appendChild(div)

    gsap.to(img,{
        y:"0",
        esae: Power1,
        duration: 0.5
    })

    gsap.to(img,{
        y: "100%",
        ease: Power1,
        duration: 0.1
    })

      setTimeout(function(){
        div.remove()
      },2000)
    }, 500));