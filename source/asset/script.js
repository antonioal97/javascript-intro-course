// document.body.addEventListener("onload", alterImg);

let bannerImg = {
  img: document.querySelector("section > img"),
  imgCaption: (enterText) => {
    const paragraph = document.createElement("p");
    document.querySelector("main:nth-child(2)").appendChild(paragraph);
    paragraph.innerHTML = enterText;
  },
};

//Paragrafo dentro da primeira section
let landingText = document.querySelector("main :nth-child(1) > p");

isHourOfDay = () => {
  let hour = new Date();
  let minutes = new Date();
  let hourNow = hour.getHours();
  let hourMinutes = minutes.getMinutes();
  return {
    hourNow,
    hourMinutes,
  };
};

let alterImg = () => {
  let extractedHour = isHourOfDay().hourNow;

  //textinho padrão independente da hora do dia
  let printText = `Agora são exatamente ${extractedHour} horas e ${
    isHourOfDay().hourMinutes
  } minutos`;
  landingText.innerHTML = printText;
  let isMorning = extractedHour > 6 && extractedHour <= 12;

  let isEvening = extractedHour >= 13 && extractedHour <= 18;

  let isNight = extractedHour >= 19 && extractedHour <= 23;

  let isDawn = extractedHour >= 0 && extractedHour <= 5;

  // console.log(typeof extractedHour); NUMBER
  //console.log(isEvening);

  // const newLocal = extractedHour <= 23;
  if (isMorning) {
    bannerImg.img.src = "../../source/img/isMorning.svg";
  } else if (isEvening) {
    bannerImg.img.src = "../../source/img/isEvening.svg";
  } else if (isNight) {
    bannerImg.img.src = "../../source/img/isNight.svg";
  } else if (isDawn) {
    bannerImg.img.src = "../../source/img/isDawn.svg";
  } else {
    bannerImg.img.src = "../../source/img/defaultImage.svg";
    bannerImg.imgCaption(
      "Nenhuma imagem foi carregada, você está vendo a imagem default."
    );
  }
};
