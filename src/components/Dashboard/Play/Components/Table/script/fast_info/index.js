export default function infoRapidas() {
 document.querySelectorAll('.Dashboard-content-Play-game-area-block-modeloArea').forEach((label, index) =>{
   const span = [...label.childNodes]
   label.onmousemove = (e) => {
     span[1].style.color = 'green'
     document.getElementById(`modelo-info-rapida-carro${index}`).style.display = 'block'
     document.getElementById(`modelo-info-rapida-carro${index}`).style.left = `${e.clientX / 40}px`
   }
   label.onmouseleave = () => {
     span[1].style.color = 'red'
     document.getElementById(`modelo-info-rapida-carro${index}`).style.display = 'none'
   }
 })
}
