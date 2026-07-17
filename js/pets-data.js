// Bichinhos de estimação — cada um tem 3 GIFs (andando, sentado, deitado).
// Para adicionar um novo bicho: coloque os 3 GIFs em img/pets/ seguindo o
// padrão de nome "nome_andando.gif", "nome_sentado.gif", "nome_deitado.gif",
// e adicione um bloco aqui embaixo com a largura/altura (w/h) de cada GIF
// (você pode ver essas medidas nas propriedades do próprio arquivo).

const PETS_BICHINHOS = [
  {
    id: "ellie",
    states: {
      andando: { src: "img/pets/ellie_andando.gif", w: 360, h: 264 },
      sentado: { src: "img/pets/ellie_sentado.gif", w: 264, h: 264 },
      deitado: { src: "img/pets/ellie_deitado.gif", w: 348, h: 204 },
    },
  },
  {
    id: "hadox",
    states: {
      andando: { src: "img/pets/hadox_andando.gif", w: 408, h: 288 },
      sentado: { src: "img/pets/hadox_sentado.gif", w: 264, h: 288 },
      deitado: { src: "img/pets/hadox_deitado.gif", w: 384, h: 216 },
    },
  },
  {
    id: "josh",
    states: {
      andando: { src: "img/pets/josh_andando.gif", w: 360, h: 264 },
      sentado: { src: "img/pets/josh_sentado.gif", w: 264, h: 264 },
      deitado: { src: "img/pets/josh_deitado.gif", w: 348, h: 204 },
    },
  },
  {
    id: "maia",
    states: {
      andando: { src: "img/pets/maia_andando.gif", w: 360, h: 264 },
      sentado: { src: "img/pets/maia_sentado.gif", w: 264, h: 264 },
      deitado: { src: "img/pets/maia_deitado.gif", w: 348, h: 204 },
    },
  },
  {
    id: "negao",
    states: {
      andando: { src: "img/pets/negao_andando.gif", w: 360, h: 264 },
      sentado: { src: "img/pets/negao_sentado.gif", w: 264, h: 264 },
      deitado: { src: "img/pets/negao_deitado.gif", w: 348, h: 204 },
    },
  },
  {
    id: "pichula",
    states: {
      andando: { src: "img/pets/pichula_andando.gif", w: 408, h: 288 },
      sentado: { src: "img/pets/pichula_sentado.gif", w: 264, h: 288 },
      deitado: { src: "img/pets/pichula_deitado.gif", w: 384, h: 216 },
    },
  },
  {
    id: "pingo",
    states: {
      andando: { src: "img/pets/pingo_andando.gif", w: 360, h: 264 },
      sentado: { src: "img/pets/pingo_sentado.gif", w: 264, h: 264 },
      deitado: { src: "img/pets/pingo_deitado.gif", w: 348, h: 204 },
    },
  },
  {
    id: "sansara",
    states: {
      andando: { src: "img/pets/sansara_andando.gif", w: 408, h: 288 },
      sentado: { src: "img/pets/sansara_sentado.gif", w: 264, h: 288 },
      deitado: { src: "img/pets/sansara_deitado.gif", w: 384, h: 216 },
    },
  },
  {
    id: "vitoria",
    states: {
      andando: { src: "img/pets/vitoria_andando.gif", w: 360, h: 264 },
      sentado: { src: "img/pets/vitoria_sentado.gif", w: 264, h: 264 },
      deitado: { src: "img/pets/vitoria_deitado.gif", w: 348, h: 204 },
    },
  },
];
