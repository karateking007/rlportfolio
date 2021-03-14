if (window.matchMedia('(max-width: 1024px)').matches) {
  // Remove container
  var container = document.querySelector('.container-main');
  container.classList.remove('container');
  // Insert title before image
  function insertTitle(headingText, itemNum, imgNum) {
    var heading = document.createElement('h3');
    headingText = document.createTextNode(headingText);
    var element = document.getElementById(`item-${itemNum}`);
    heading.appendChild(headingText);
    var img = document.getElementById(`item-img-${imgNum}`);
    element.insertBefore(heading, img);
  }
  // Add View Live button
  function addViewLiveButton(liveLink, itemNum) {
    var a = document.createElement('a');
    var linkText = document.createTextNode('View Live');
    a.appendChild(linkText);
    var element = document.getElementById(`item-${itemNum}`);
    element.appendChild(a);
    a.href = `${liveLink}`;
    a.target = '_blank';
    a.classList += 'button-smartphone';
  }
  // Add View GitHub button
  function addViewGHButton(ghLink, itemNum) {
    var a = document.createElement('a');
    var linkText = document.createTextNode('View GitHub');
    a.appendChild(linkText);
    var element = document.getElementById(`item-${itemNum}`);
    element.appendChild(a);
    a.href = `${ghLink}`;
    a.target = '_blank';
    a.classList += 'button-smartphone';
  }

  var titles = {
    1: 'Travel Agency Website',
    2: 'Sports News Website',
    3: 'Financial Company Website',
    4: 'Calorie Tracker (JavaScript)',
  };
  var liveLinks = {
    1: 'https://rileylitchfield.github.io/travel-agency/',
    2: 'https://rileylitchfield.github.io/newsgrid/',
    3: 'https://rileylitchfield.github.io/usa-bank/',
    4: 'https://rileylitchfield.github.io/calorietracker/',
  };
  var ghLinks = {
    1: 'https://github.com/rileylitchfield/travel-agency',
    2: 'https://github.com/rileylitchfield/newsgrid',
    3: 'https://github.com/rileylitchfield/usa-bank',
    4: 'https://github.com/rileylitchfield/calorietracker',
  };
  // Loop through functions
  for (i = 1; i <= 4; i++) {
    insertTitle(titles[i], i, i);
    addViewLiveButton(liveLinks[i], i);
    addViewGHButton(ghLinks[i], i);
  }
}
