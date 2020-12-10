function deixarDeSeguir(){
    let btSeguindo = document.querySelectorAll("button.sqdOP.L3NKy._8A5w5")
    let count = 0
      btSeguindo.forEach((item, value)=>{
            setTimeout(()=>{
                if(!item.classList.contains('y3zKF')){
                    item.click()
                    count++
                    setTimeout(()=>{
                        let btConfirmar = document.querySelector("button.aOOlW.-Cab_").click()
                        console.log(`Voce deixou de seguir ${count}`)
                    }, 5000)
                }

            }, value * 15000)
      })
} 

deixarDeSeguir()