function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            let display = '';
            // console.log(json[0]);
            for(let i=0; json.length>i; i++){
                console.log(json[i]);
                display += `<div class="card m-1" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${json[i].id}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${json[i].title}</h6>
                  <p class="card-text">${json[i].body}</p>
                </div>
              </div>`
            }
            document.getElementById('display').innerHTML = display
        })
        .catch((err) => console.log(err))
        .finally(() => console.log('call'))

}

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))
}