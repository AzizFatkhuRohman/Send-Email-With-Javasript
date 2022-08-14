let dataBlog = [];
function postProject(event) {
  event.preventDefault();

  let title = document.getElementById('TitlePost').value;
  let description = document.getElementById('DescriptionPost').value;
  let image = document.getElementById('input-blog-image').files;

  if (!title || !description || !image) {
    return alert('Formulir tidak boleh kosong');
  } else {
    alert('Data berhasil dilengkapi');
  }

  let MobileApp = document.getElementById('MobileApp').checked;
  let WebApp = document.getElementById('WebApp').checked;
  let DesktopApp = document.getElementById('DesktopApp').checked;

  if (MobileApp) {
    MobileApp = document.getElementById('MobileApp').value;
  } else {
    MobileApp = '';
  }
  if (WebApp) {
    WebApp = document.getElementById('WebApp').value;
  } else {
    WebApp = '';
  }
  if (DesktopApp) {
    DesktopApp = document.getElementById('DesktopApp').value;
  } else {
    DesktopApp = '';
  }

  console.log(MobileApp);
  console.log(WebApp);
  console.log(DesktopApp);

  image = URL.createObjectURL(image[0]);

  let blog = {
    title,
    description,
    image,
    author: 'Aziz F Rohman',
    postAt: new Date(),
    MobileApp,
    WebApp,
    DesktopApp,
  };

  dataBlog.push(blog);

  renderBlog();
}

function renderBlog() {
  document.getElementById('contents').innerHTML = '';

  console.log(dataBlog);

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById('contents').innerHTML += `
    <div class="ProjectContainer" id="cardProject">
            <div class="ProjectNew">
                <div class="ImageProject">
                    <img src="${dataBlog[index].image}" alt="warneng">
                </div>
                <div class="ContentProject">
                    <a href="projectDetail.html" target="_blank" class="TitleProject">${dataBlog[index].title}</a>
                    <p class="DistanceProject"> ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}</p>
                    <p class="DescriptionProject">${dataBlog[index].description}</p>
                    <div class="ProjectCardIcon">
                        <div class="ItemIconProject">
                            <img src="${dataBlog[index].MobileApp}" alt="phone">
                            <img src="${dataBlog[index].WebApp}" alt="web">
                        </div>
                    </div>
                    <div class="ProjectAction">
                        <a href="#" class="Edit"><button class="Edit">Edit</button></a>
                        <a href="#" class="Delete"><button class="Delete">Delete</button></a>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

function getFullTime(time) {
  let month = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];

  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  } else if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;

  return fullTime;
}
