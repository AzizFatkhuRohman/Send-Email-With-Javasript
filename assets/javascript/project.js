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
                    <p class="DistanceProject">${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}</p>
                    <p class="DescriptionProject">${dataBlog[index].description}</p>
                    <div class="ProjectCardIcon">
                        <div class="ItemIconProject">
                        <i class="fa-brands fa fa-android${dataBlog[index].Mobileapp}"></i>
                        <i class="fa-brands fa fa-stack-overflow${dataBlog[index].WebApp}"></i>
                        <i class="fa-brands ffa fa-windows${dataBlog[index].DesktopApp}"></i>
                        </div>
                    </div>
                    <div class="DistanceProject">
                        <p>${getDistanceTime(dataBlog[index].postAt)}</p>
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
  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agst', 'Sep', 'Okt', 'Nov', 'Des'];

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
function getDistanceTime(time){

  let timeNow = new Date()
  let timePost = time

 
  let distance = timeNow - timePost
  console.log(distance);

  let milisecond = 1000
  let secondInHours = 3600
  let hoursInDay = 24

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
  let distanceMinutes = Math.floor(distance / (milisecond * 60))
  let distanceSecond = Math.floor(distance / milisecond)
  
  
  if(distanceDay > 0){
      return `${distanceDay} day ago`
  } else if(distanceHours > 0){
      return `${distanceHours} hours ago`
  } else if(distanceMinutes > 0){
      return `${distanceMinutes} minutes ago`
  } else {
      return `${distanceSecond} seconds ago`
  }
  
}