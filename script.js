const container =
document.getElementById("container");

const search =
document.getElementById("search");

function render(data){

container.innerHTML="";

data.forEach(chapter=>{

const div =
document.createElement("div");

div.className="chapter";

div.innerHTML=`

<div class="chapter-title">
${chapter.chapter}
</div>

<div class="lesson-list">

${chapter.lessons.map(lesson=>`

<div class="lesson">

<h3>${lesson.title}</h3>

<div class="links">

<a class="video"
href="${lesson.video}"
target="_blank">
🎥 Video
</a>

<a class="tailieu"
href="${lesson.tailieu}"
target="_blank">
📄 Tài liệu
</a>

<a class="btvn"
href="${lesson.btvn}"
target="_blank">
📝 BTVN
</a>

<a class="chua"
href="${lesson.chua}"
target="_blank">
✅ Chữa
</a>

</div>

</div>

`).join("")}

</div>
`;

container.appendChild(div);

});

document
.querySelectorAll(".chapter-title")
.forEach(btn=>{

btn.onclick=()=>{

const list =
btn.nextElementSibling;

list.style.display=
list.style.display==="block"
? "none"
: "block";

};

});
}

render(courses);

search.addEventListener("input",()=>{

const keyword =
search.value.toLowerCase();

const filtered =
courses.map(ch=>({

...ch,

lessons: ch.lessons.filter(ls=>

ls.title
.toLowerCase()
.includes(keyword)

)

}))

.filter(ch=>ch.lessons.length);

render(filtered);

});
