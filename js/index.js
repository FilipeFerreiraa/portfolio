function toggle_menu () {
  let menu_mobile = document.querySelector('.mobile-menu-container');

  if (menu_mobile.classList.contains('menu-closed')) {
    menu_mobile.classList.remove('menu-closed');
    menu_mobile.classList.add('menu-open');
    document.querySelector('#mobile-button').src = './assets/img/menu-close.png';
  } else {
    menu_mobile.classList.remove('menu-open');
    menu_mobile.classList.add('menu-closed');
    document.querySelector('#mobile-button').src = './assets/img/menu-icon.png';
  }
}

function toggle_project_description () {
  let project_content = document.querySelector('.project-content');
  let project_description = document.querySelector('.project-description');
  let project_button = document.querySelector('.project-button');

    if (project_description.classList.contains('project-closed')) {
      project_description.classList.remove('project-closed');
      project_description.classList.add('project-open');
      project_content.style.borderBottomRightRadius = '0px';
      project_content.style.borderBottomLeftRadius = '0px';
      project_button.innerHTML = '-'
    } else {
        project_description.classList.remove('project-open');
        project_description.classList.add('project-closed');
        project_content.style.borderBottomRightRadius = '5px';
        project_content.style.borderBottomLeftRadius = '5px';
        project_button.innerHTML = '+'
    }
}

function toggle_project_description_2 () {
  let project_content = document.querySelector('#project-content');
  let project_description = document.querySelector('#project-description');
  let project_button = document.querySelector('#project-button');

    if (project_description.classList.contains('project-closed')) {
      project_description.classList.remove('project-closed');
      project_description.classList.add('project-open');
      project_content.style.borderBottomRightRadius = '0px';
      project_content.style.borderBottomLeftRadius = '0px';
      project_button.innerHTML = '-'
    } else {
        project_description.classList.remove('project-open');
        project_description.classList.add('project-closed');
        project_content.style.borderBottomRightRadius = '5px';
        project_content.style.borderBottomLeftRadius = '5px';
        project_button.innerHTML = '+'
    }
}
