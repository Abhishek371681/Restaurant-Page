export function loadHome() {

  const content = document.getElementById('content');
  const topDiv = document.createElement('div');
  const topTextDiv = document.createElement('div');
  topTextDiv.classList.add('topTextDiv');
 const imageCard = document.createElement('img');
 imageCard.src = "https://images.pexels.com/photos/27950444/pexels-photo-27950444.jpeg"
 imageCard.classList.add('image-1');

  topDiv.classList.add('home-top');

  
  const heading = document.createElement('h1');
  heading.innerText = 'The Lićious Restaurant';
  heading.classList.add('homeheading');

  const subText = document.createElement('p');
  subText.innerText = "Welcome to The Licious, where flavor meets passion. We serve carefully crafted dishes made from the freshest ingredients, bringing you an unforgettable dining experience in every bite. Whether you're here for comfort food or something extraordinary, we promise taste that lingers. At The Licious, we focus on serving fresh, handcrafted meals made with care and quality ingredients. Our menu blends bold flavors with comforting classics to suit every taste. Whether you're here for a quick bite or a full dining experience, we aim to make every visit satisfying. Great food, warm vibes, and consistency you can always rely on";
  subText.classList.add('para1');
  


  //SecondCard:

  const secondDiv = document.createElement('div');
  secondDiv.classList.add('second-card');

  const locationCard = document.createElement('div');
  locationCard.classList.add('location-card');

  const addressCard = document.createElement('div');
  addressCard.classList.add('addressCard')

  const textDiv2 = document.createElement('div');
  textDiv2.classList.add('topTextDiv');
 const mapImg = document.createElement('img');
 mapImg.classList.add('mapimg');

  secondDiv.classList.add('secondDiv');

   mapImg.src = "https://img.freepik.com/free-vector/informational-city-map-with-streets-name_23-2148309621.jpg?semt=ais_hybrid&w=740&q=80";

   const locationHeading = document.createElement('h1');
  locationHeading.innerText = '📍Locate Us here!';
  locationHeading.classList.add('location-heading');

  
  const address = document.createElement('p');
  address.classList.add('address');

  //footer

  const footDiv = document.createElement('footer');
  footDiv.classList.add('footer');

  const Addr = document.createElement('p');
  Addr.innerText = '📍Rue Charles de Gaulle, Deuil-la-Barre, France'
  Addr.classList.add('Addr-Para')

  const copyright = document.createElement('p');
  copyright.innerText = '©The Lićious Restaurant'
  copyright.classList.add('copyright');
  



topTextDiv.append(heading);
  topDiv.append(imageCard);
  topDiv.append(topTextDiv);
  topTextDiv.append(subText);
  content.append(topDiv);

  locationCard.append(locationHeading);
  locationCard.append(mapImg);
  secondDiv.append(locationCard);
  secondDiv.append(textDiv2);
  secondDiv.append(address);
  content.append(secondDiv);



 footDiv.append(Addr);
footDiv.append(copyright);
content.append(footDiv);

}
