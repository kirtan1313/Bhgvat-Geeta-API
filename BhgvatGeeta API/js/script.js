
const header= new Headers();

let chepter = document.getElementById('chepter');
let chshlok = document.getElementById('chshlok');

const getshlok = (chapterNumber, shlokNumber) => {
  fetch(`https://bhagavadgitaapi.in/slok/${chapterNumber}/${shlokNumber}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      chshlok.innerHTML += `<div class="all-chept fw-bold fs-3"><div class="shlok">${data.slok}</div>
                      <div class="tej mt-4">${data.tej.author}</div>
                          <div class="tej mt-1">${data.tej.ht}</div>
                          <div class="tej mt-4">${data.siva.author}</div>
                          <div class="tej mt-1">${data.siva.et}</div> 
                           <div class="tej mt-1">${data.siva.ec}</div></div>`;
    })
    .catch((err) => console.log(err));
}


const chept = async () => {
  await fetch('https://bhagavadgitaapi.in/chapters', {
    method: "GET",
    mode: 'cors',
    headers: header
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((ele) => {
        chepter.innerHTML += `<div class="d-flex mt-4 off-text-color">
        <div class="des col-6" >
            <div class="ch-num">अध्याय : ${ele.chapter_number}</div>
            <div class="chepter-name">नाम :${ele.name}</div>
            <div class="ch-meaning">अध्यायार्थः : ${ele.meaning.hi}</div>
            <div class="ch-verse">श्लोक संख्या : ${ele.verses_count}</div>
        </div>
        <div class="col-4 name-width">
          <div>
            <lable class="ms-auto">Enter shlok number</lable>
        <input type="number" class="shlok-number mybtn w-50px bg-transparent text-dark" oninput="getshlok(${ele.chapter_number}, this.value)">
          </div>
        </div> 
    </div>`

      });
    })
    .catch((err) => {
      console.log("err chet", err);
    });
}

chept();

