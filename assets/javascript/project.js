let Project = [];
let ItemCheckBox = [];

function PostProject(event) {
  event.preventDefault();
  let TitlePost = document.getElementById('TitlePost').value;
  let StartDatePost = document.getElementById('StartDatePost').value;
  let EndDatePost = document.getElementById('EndDatePost').value;
  let DescriptionPost = document.getElementById('DescriptionPost').value;
  let ImagePost = document.getElementById('ImagePost').files[0];

  ImagePost = URL.createObjectURL(ImagePost);

  let Technologies = document.getElementsByName('CheckedProject');

  ItemCheckBox = [];
  for (let i = 0; i < Technologies.length; i++) {
    if (Technologies[i].checked == true) {
      ItemCheckBox.push(Technologies[i].value);
    }
  }
  let blogs = {
    TitlePost,
    StartDatePost,
    EndDatePost,
    DescriptionPost,
    checkedValue,
    ImagePost,
  };
  Project.push(blogs);
  NewProject();
}

let NewProject = () => {
  let PostProject = document.getElementById('ProjectNew');
  let data = checkedValue.length;

  PostProject.innerHTML = '';
  for (i = 0; i < Project.length; i++) {
    PostProject.innerHTML += `<div class="ProjectRender">
        <div class="ImageProject">
            <img src="${blogs[i].ImagePost}" alt="">
        </div>
        <div class="ContentProject">
            <a href="projectDetail.html" class="titleCardProject">${blogs[i].TitlePost}</a>
            <p class="DistanceProject">Duration : 2 Week</p>
            <p class="DescriptionProject">${blogs[i].DescriptionPost}</p>
            <div class="ItemIconProject">
                ${(function icon() {
                  let string = '';
                  for (let j = 0; j < data; j++) {
                    string += `<div class="itemIconProject">
                            <i class="fa-brands fa-${blogs[i].checkedValue[j]}"></i>
                        </div>`;
                  }
                  return string;
                })()}
            </div>
            <div class="ProjectAction">
                <a href="#" class="Edit">Edit</a>
                <a href="#" class="Delete">Delete</a>
            </div>
        </div>
    </div>`;
  }
};
