const makeASnack = (snack) => {
  let domString = `
    <div class="card col-3 snack-card">
      <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">$${snack.price / 100}</p>
      </div>
      <div class="card-footer">`;
  if (snack.snackPositionId !== '') {
    domString += `<button id="${snack.snackPositionId}" class="btn btn-danger delete-snack-position">REMOVE FROM ${snack.position.position}</button>`;
  } else {
    domString += `<input type="text" placeholder="A1" /><button class="btn btn-primary add-snack-position" id="${snack.id}">ADD TO MACHINE</button>`;
  }
  domString += '</div></div>';
  return domString;
};

export default { makeASnack };
