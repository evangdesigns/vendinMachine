import machineData from '../../helpers/data/smash';
import './machine.scss';
import snacks from '../snacks/snacks';
import utilities from '../../helpers/utilities';

const buildTheMachine = () => {
  machineData.getCompleteMachine()
    .then((positions) => {
    // build a dom string
    // div with an id = snack-section, class=d-flex flex-wrap
    // forEach over positions - call a component called snacks
    // snacks component should return a bootstrap card
      let domString = '<h2 class="text-center>VENDING MACHINE</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snacks.snackCard(position);
      });
      domString += '</div>';
      utilities.printToDom('stock', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
