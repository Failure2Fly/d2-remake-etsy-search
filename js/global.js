var image = {};

createCard({
    src:'https://unsplash.it/210/210?image=100',
    caption: 'Unkown Image',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=200',
    caption: 'Mystery',
    maker: 'HBakerStudio',
    price: '$17.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=300',
    caption: 'Something',
    maker: 'judysJunktion',
    price: '$94.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=400',
    caption: 'Something',
    maker: 'SuxansUnbreakable',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=500', 
    caption: 'Something',
    maker: 'StutzyVintageGames',
    price: '$19.99'
});
createCard({
    src:'https://unsplash.it/210/210?image=600',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=700',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=800',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=900',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210image=1000',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'    
});
createCard({
    src:'https://unsplash.it/210/210?image=250',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});
createCard({
    src:'https://unsplash.it/210/210?image=350',
    caption: 'Something',
    maker: 'Dogbotzboneyard',
    price: '$32.00'
});

function createCard(image) {
     var card = `<div class="card">
        <img src="${image.src}" alt="Image" />
            <h5 class-"card-option">${image.caption}</h5>
            <h5 class-"maker-price">${image.maker} ${image.price}</h5>
        </div>`;
        
        document.querySelector('#results').innerHTML += card;
}
