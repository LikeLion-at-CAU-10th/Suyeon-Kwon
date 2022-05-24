import { fetchGET, fetchPOST } from "./dataFetching.js";

//const SERVER_HOST =
//  "https://asia-northeast3-likelion-js-practice.cloudfunctions.net/api";
const SERVER_HOST="http://localhost:8000";
const NAME = "권수연";

async function getProfileData(name) {
  const path = "/footprint/send";

  const res = await fetchGET(SERVER_HOST,path,{name: name}); //awit- 동기, async-비동기 : 반드시 순차적으로 이루어져야 할때는 동기
  const myName = res.data.profile.name;
  const myMbti = res.data.profile.mbti;
  const myGithub = res.data.profile.github;
  
  document.querySelector('#fetch-name').innerHTML = myName;
  document.querySelector('#fetch-mbti').innerHTML = myMbti;
  document.querySelector('#fetch-github').innerHTML = myGithub;
}

async function getFootprint(name) {
  const path="/footprint";

  const res = await fetchGET(SERVER_HOST,path,{name: name});
  const messages=res.data.messages;
  for(let i=0;i<messages.length;i++){
  const messageFormat=
  `<div class="board-row">
    ${messages[i]}
  </div>`
  document.querySelector(".board").innerHTML+=messageFormat;
  }

}

async function sendFootprint() {
  const path="/footprint/send";
  const messageObj={
    content:document.querySelector(".message-content").value,
    receiverName:document.querySelector(".message-sender").value,
  };
  const res= await fetchPOST(SERVER_HOST,path,messageObj);
  if(res.status===200){
    alert("성공전송")
  }
}

window.onload = function () {
  const isGetFootprintSuccess = getFootprint(NAME)

  const sendButton = document.querySelector(".send-btn");
  sendButton.addEventListener("click", () => {
    sendFootprint();
  });

  getProfileData(NAME);
  getFootprint(NAME);
};