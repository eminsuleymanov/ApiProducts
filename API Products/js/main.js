function GetProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
       let html = '';
       data.forEach(pr => {
        let pr_title = pr.title.length > 20 ? pr.title.slice(0,20) + "..." : pr.title;
        let pr_name = pr.description.length > 40 ? pr.description.slice(0,40) + "..." : pr.description
        html += `
        <div class="col-lg-4 box">
            <div id=${pr.price > 100 ? "exp" : 'cheap'} class="card">
                <img src=${pr.image} class="card-img-top " style="height: 400px" alt="...">
                <div class="card-body">
                <h5 class="card-title">${pr_title}</h5>
                <p class="card-text">${pr_name}</p>
                <p class="card-text">Rating: ${pr.rating.rate > 3 ? 'High' : 'Low'}</p>
                <span class="card-text bg-success text-white ">${pr.price} AZN</span>
                </div>
            </div>
        </div> 
        `
       })
       document.getElementById('list').innerHTML = html
    })
    .catch(error => console.log(error))
}

GetProducts();