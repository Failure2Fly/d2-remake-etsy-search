var item = {};

createResultCard({
    image: 'https://unsplash.it/210/210?image=100',
    title: 'Unkown Image',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=200',
    title: 'Mystery',
    seller: 'HBakerStudio',
    price: '$17.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=300',
    title: 'Something',
    seller: 'judysJunktion',
    price: '$94.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=400',
    title: 'Something',
    seller: 'SuxansUnbreakable',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=500',
    title: 'Something',
    seller: 'StutzyVintageGames',
    price: '$19.99'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=600',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=700',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=800',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=900',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=1000',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=250',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});
createResultCard({
    image: 'https://unsplash.it/210/210?image=350',
    title: 'Something',
    seller: 'Dogbotzboneyard',
    price: '$32.00'
});

// function createResult(result) {
//     var card = `<div class="card">
//         <img src="${result.image}" alt="Image" />
//             <h5 class-"card-option">${result.title}</h5>
//             <h5 class-"maker-price">${result.seller} ${result.price}</h5>
//         </div>`;

//     document.querySelector('#results').innerHTML += card;
// }

function createResultCard(item) {
  var card = document.createElement('div');
  card.classList.add('col-sm-4');
        var item = `<div class="card">
        <img src="${item.image}" alt="Image" />
        <h5 class-"card-title">${item.title}</h5>
        <h5 class-"maker-price">${item.seller} ${item.price}</h5>
        </div>`;
        var blue = document.querySelector('.row').appendChild(card)
        document.querySelector('#results').innerHTML += item;
        console.log(blue)
}
