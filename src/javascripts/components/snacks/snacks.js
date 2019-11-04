import './snacks.scss';

const snackCard = (position) => {
  let domString = '';
  if (position.snack.name) {
    domString += `
    <div id="snackCard" class="card col-4">
      <img src="${position.snack.imageUrl}" alt="${position.snack.name}" />
      <h3>${position.snack.name}</h3>
      <p>$${position.snack.price / 100}</p>
      <p>${position.snack.position}</p>
    </div>
    `;
  } else {
    domString += `
    <div id="snackCard" class="card col-4">
      <h2>SOLD OUT</h2>
    </div>
    `;
  }
  return domString;
};
export default { snackCard };
