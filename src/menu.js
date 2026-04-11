export function menuCard() {
    const content = document.getElementById('content');

    const menuItems = [
        {
            title: 'Truffle Pasta',
            description: 'Silky pasta folded with cream, parmesan, and a gentle truffle finish for a rich comfort plate.',
            image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg'
        },
        {
            title: 'Flame Burger',
            description: 'Juicy grilled patty layered with cheddar, caramelized onions, and a smoky house sauce.',
            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
        },
        {
            title: 'Garden Pizza',
            description: 'Thin crust topped with roasted vegetables, basil, mozzarella, and a bright tomato base.',
            image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg'
        },
        {
            title: 'Golden Tacos',
            description: 'Crisp tacos packed with seasoned filling, fresh salsa, and a cool lime crema.',
            image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'
        },
        {
            title: 'Saffron Bowl',
            description: 'A fragrant rice bowl with grilled vegetables and tender protein for a balanced hearty meal.',
            image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'
        },
        {
            title: 'Crispy Fries',
            description: 'Hand-cut fries served hot with herbs, sea salt, and a creamy dip on the side.',
            image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'
        },
        {
            title: 'Berry Sundae',
            description: 'A chilled dessert stacked with vanilla cream, berries, syrup, and delicate crunch.',
            image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'
        },
        {
            title: 'Citrus Salad',
            description: 'Fresh greens, juicy citrus, toasted seeds, and a light dressing that keeps it bright.',
            image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg'
        },
        {
            title: 'Mocha Shake',
            description: 'A smooth coffee-chocolate shake finished with foam for an easy sweet finish.',
            image: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg'
        }
    ];

    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');

    const menuTitle = document.createElement('h1');
    menuTitle.innerText = 'Delicious Menu of The Lićious';
    menuTitle.classList.add('menuTitle');

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    menuItems.forEach((item) => {
        const menuBox = document.createElement('article');
        menuBox.classList.add('menu-box');

        const imageWrap = document.createElement('div');
        imageWrap.classList.add('menu-image-wrap');

        const menuImage = document.createElement('img');
        menuImage.classList.add('menu-image');
        menuImage.src = item.image;
        menuImage.alt = item.title;

        const reviewWrap = document.createElement('div');
        reviewWrap.classList.add('menu-review');

        const reviewTitle = document.createElement('h2');
        reviewTitle.classList.add('menu-item-title');
        reviewTitle.innerText = item.title;

        const reviewText = document.createElement('p');
        reviewText.classList.add('menu-item-description');
        reviewText.innerText = item.description;

        imageWrap.append(menuImage);
        reviewWrap.append(reviewTitle, reviewText);
        menuBox.append(imageWrap, reviewWrap);
        menuGrid.append(menuBox);
    });

    menuSection.append(menuTitle, menuGrid);
    content.append(menuSection);
}
