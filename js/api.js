const apiPath = "https://2023-engineer-camp.zeabur.app";
const list = document.querySelector(".tools-list");

const data = {
  type: "",
  sort: 0,
  page: 1,
  search: "",
};

let worksData = [];
let pagesData = {};

function getData({ type, sort, page, search }) {
  const apiUrl = `${apiPath}/api/v1/works?  sort=${sort}&page=${page}&${
    type ? `type=${type}` : ""
  }${search ? `search=${search}` : ""}`;
  axios.get(apiUrl).then(function (res) {
    worksData = res.data.ai_works.data;
    pagesData = res.data.ai_works.page;

    renderWorks();
    renderPages();
  });
}

getData(data);

//作品渲染
function renderWorks() {
  let works = "";
  worksData.forEach((item) => {
    works += /*html*/ `<li>
        <div class="img-container">
          <a href="#"><img src="${item.imageUrl}"></a>
        </div>
        <div class="tools-description">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>

        <div class="tools-ai">
          <span>AI 模型</span>
          <span>${item.model}</span>
        </div>
        <div class="tools-tag">
          <span>#${item.type}</span>
          <a class="card-link" href="${item.link}" target="_blank">
            <span class="material-icons">
              share
            </span>
          </a>
        </div>
      </li>`;
  });
  list.innerHTML = works;
}

//分類
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.textContent === "全部") {
      data.type = "";
    } else {
      data.type = item.textContent;
    }
    getData(data);
  });
});
