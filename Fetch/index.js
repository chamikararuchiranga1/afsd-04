function getData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err)=> console.log(err))
    .finally(()=> console.log('call'))

}