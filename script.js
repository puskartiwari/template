document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    fetch('https://raw.githubusercontent.com/sarojpunde/json/master/authors.json'
    
)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    const dataList = document.getElementById('data-list');

  

    data.forEach(author => {

            // Get the current date
      const currentDate = new Date();
      const formattedDate = currentDate.toDateString();

      // Create an element to display the current date
      const dateElement = document.createElement('p');

      dateElement.innerHTML = formattedDate;

        const li = document.createElement('li');
        li.innerHTML = `
        <img src="${author.avatar_url}" alt="" >
        <span>${author.name}</span> <label>posted on</label>
        <label>${formattedDate}</label>
        <hr>



               
         `;
        dataList.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', fetchPostData);

function fetchPostData() {
    fetch('https://raw.githubusercontent.com/sarojpunde/json/master/posts.json')
        .then(response => response.json())
        .then(data => displayPostData(data))
        .catch(error => console.error('Error fetching data:', error));
}


function displayPostData(data) {
    const dataPost = document.getElementById('data-post');

    data.forEach(post => {
        const Pi = document.createElement('p');
        Pi.innerHTML = `
        <img src="${post.image_url}" alt="">
            <span>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </span> 
            
          
        `;
        dataPost.appendChild(Pi);
    });
}
