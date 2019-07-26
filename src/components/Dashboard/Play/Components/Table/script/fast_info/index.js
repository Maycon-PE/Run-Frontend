export default function infoRapidas() {
 document.querySelectorAll('.Dashboard-content-Play-game-area-block-modeloArea').forEach((td, index) =>{
   const span = [...td.childNodes]
   td.onmousemove = (e) => {
     span[1].style.color = 'green'
     document.getElementById(`modelo-info-rapida-carro${index}`).style.display = 'block'
     document.getElementById(`modelo-info-rapida-carro${index}`).style.left = `${e.clientX / 40}px`
     document.getElementById(`modelo-info-rapida-carro${index}`).style.top = `32px`
   }
   td.onmouseleave = () => {
     span[1].style.color = 'red'
     document.getElementById(`modelo-info-rapida-carro${index}`).style.display = 'none'
   }
 })
}
