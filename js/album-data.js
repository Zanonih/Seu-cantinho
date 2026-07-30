// Linha do tempo do álbum: cada entrada é um momento, em ordem cronológica
// (do mais antigo pro mais recente — a primeira da lista aparece no topo).
//
// Pra adicionar uma foto sua: coloque o arquivo em img/album/ e adicione um
// bloco aqui embaixo. "data" pode ser uma data de verdade ("Março de 2023")
// ou só uma frase ("o dia que a gente se conheceu"). "legenda" é opcional.
// "blur: true" deixa a foto borrada até a pessoa clicar pra revelar.
//
// { data: "Março de 2023", src: "img/album/primeira-vez.jpg", alt: "Nosso primeiro encontro", legenda: "no café perto da sua casa" },

const ALBUM_FOTOS = [
  { data: "19 de abril de 2025", src: "img/album/primeira-foto.jpg", alt: "Nossa primeira foto", legenda: "Nossa primeira foto" },
  { data: "19 de abril de 2025", src: "img/album/chicletinho.jpg", alt: "Depois de comprar um chicletinho", legenda: "Depois de comprar um chicletinho" },
  { data: "21 de abril de 2025", src: "img/album/segundo-date.jpg", alt: "Segundo date", legenda: "Segundo date e olha essa química" },
  { data: "19 de junho de 2025", src: "img/album/melhor-parte-2025.jpg", alt: "A melhor parte do meu 2025", legenda: "A melhor parte do meu 2025" },
  { data: "20 de junho de 2025", src: "img/album/sinuca.jpg", alt: "Jogando sinuca", legenda: "Você me desconcertando pra ganhar na sinuca" },
  { data: "21 de junho de 2025", src: "img/album/porcao-incident.jpg", alt: "No Porcão", legenda: "The Porcão incident" },
  { data: "30 de agosto de 2025", src: "img/album/sao-paulo-fc.jpg", alt: "Vestindo a camisa do São Paulo", legenda: "aqui eu te fiz SÃO PAULO FUTEBOL CLUBE" },
  { data: "31 de agosto de 2025", src: "img/album/fotasso.jpg", alt: "Fotasso", legenda: "FOTASSO" },
  { data: "20 de setembro de 2025", src: "img/album/como-nos-olhamos.jpg", alt: "Como a gente se olha", legenda: "Amo o jeito que a gente se olha nessa foto" },
  { data: "1 de novembro de 2025", src: "img/album/show-ivete.jpg", alt: "No show da Ivete", legenda: "você servindo facecard e servindo peituda no show da Ivete" },
  { data: "22 de novembro de 2025", src: "img/album/viagem-bh-sp.jpg", alt: "Viagem BH e São Paulo", legenda: "Nossa primeira viagem não BH e São Paulo" },
  { data: "31 de dezembro de 2025", src: "img/album/ano-novo-cinema.jpg", alt: "Réveillon", legenda: "O primeiro ano novo de muitos juntos. (Essa foto aqui ficou CINEMA)" },
  { data: "31 de dezembro de 2025", src: "img/album/ano-novo-linda.jpg", alt: "Réveillon", legenda: "Tive que colocar essa aqui, você ta tão linda, tão gracinha" },
  { data: "11 de janeiro de 2026", src: "img/album/absolute-guanabara.jpg", alt: "Guanabara", legenda: "Absolute Guanabara" },
  { data: "19 de janeiro de 2026", src: "img/album/combinandinho.jpg", alt: "Combinando look", legenda: "Nós combinandinho" },
  { data: "19 de janeiro de 2026", src: "img/album/intima.jpg", alt: "Um momento nosso", legenda: "Já que você gosta tanto eu tive que colocar uma....", blur: true },
  { data: "14 de fevereiro de 2026", src: "img/album/foto-fev2026.jpg", alt: "Fantasia de casal", legenda: "Nossa primeira fantasia de casal" },
  { data: "14 de março de 2026", src: "img/album/foto-mar2026.jpg", alt: "Um momento nosso", legenda: "Família tradicional brasileira" },
  { data: "19 de abril de 2026", src: "img/album/foto-abr2026.jpg", alt: "Um momento nosso", legenda: "releitura desconstruída do nosso primeiro date" },
  { data: "16 de maio de 2026", src: "img/album/foto-mai2026.jpg", alt: "Um momento nosso", legenda: "A madrinha mais linda e eu" },
  { data: "13 de junho de 2026", src: "img/album/foto-jun2026-1.jpg", alt: "Camisas combinando do Brasil", legenda: "BRASIL" },
  { data: "22 de junho de 2026", src: "img/album/foto-jun2026-2.jpg", alt: "Um momento nosso", legenda: "Você tava tão linda esse dia, amei andar KILOMETROS com vc, e depois passar mal vendo você na bicicleta KKKK" },
];
