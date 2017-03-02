// var results = [];
// var result = [];

getInfo();

function getInfo() {
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            results = data;
            console.log(searchResults)
            results.forEach(result); {
                createResultCard(result);
            }
        });
}

function createResultCard(result) {

    var card = `<div class="col-sm-4 col-md-3">
        <div class="card">
            <img src="${result.image.url_75x75}"/>
            <div class="card-caption">
                <div>${result.description}</div>
                <div>
                    <span class="text-muted">${result.shop_name}</span>
                    <span class="text-success pull-right">${result.price}</span>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector('#cards').innerHTML += card;
};


// function handleKeyPress(e){
//  var key=e.keyCode || e.which;
//   if (key==13){
//      searching();
//   }
// }