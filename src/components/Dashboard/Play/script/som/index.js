/* Som do nitro */ import som_nitro from '../../audios/nitro.mp3'
/* Som da corrida */ import som_corrida from '../../audios/corrida.mp3'
/* Som ao parar */ import som_parar from '../../audios/pararBatendo.mp3'
/* Som ao término */ import som_fim from '../../audios/fimCorrida.mp3'

const sons = [som_corrida, som_parar, som_fim]

export function somCorrida(som) {
  document.getElementById('som-corrida').innerHTML = `<audio autoplay><source src=${sons[som]} type='audio/ogg'></audio>`
}


export function somNitro(index) {
  document.getElementById(`som-nitro${index}`).innerHTML = `<audio autoplay><source src=${som_nitro} type='audio/ogg'></audio>`
}
