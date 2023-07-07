const request = new XMLHttpRequest();
request.open('GET', 'data.json');
request.setRequestHeader('content-type', 'application/json');
request.send();

request.addEventListener('load', () => {
  const response = JSON.parse(request.response);
  
  const parentList = (human) => {
    if (human.parents) {
      console.log(human.parents);
      for (let key in human.parents) {
        parentList(human.parents[key]);
      }
    } else {
      console.log('...oops');
    }
  }
  
  for (let key in response) {
    parentList(response[key]);
  }
});