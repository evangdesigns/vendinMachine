import machineData from '../../helpers/data/smash';
import './machine.scss';

const buildTheMachine = () => {
// 1. get machines - returns first machine (hard coding)
  machineData.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));
// 2. Use machineId to get all positions for that machine
// 3. use machineId to get all snack positions
// 4. use the uid of snakPositions/positions to get available snack from the machine
// 5. SMASH EM' - return an array of positions ( in order A1, A2, A3, B1 ...)
// so positions should have position.snack if a snack exists at that position
};

export default { buildTheMachine };
