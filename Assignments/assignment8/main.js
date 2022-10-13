const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 65 fahrenheit outside in the middle of Feburary in Boulder, so :insertx: went outside. They took over :inserty: and took it as their own. The :insertz: was flowing, music was blasting, and the people were enjoying themselves. Bob was watching the craziness, but was not surprised by :insertx: partying and living their best life."
const insertX = ['all the students', 'all the professors', 'everyone and their mother']
const insertY = ['an entire street', 'Norlin Quad', 'the Boulder Creek']
const insertZ = ['beer', 'kool aid', 'yerba mate']

storyText.font = 'Space Mono, monospace';

randomize.addEventListener('click', result);

function result() {

    newStory = storyText;

    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    newStory = newStory.replace('65 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

