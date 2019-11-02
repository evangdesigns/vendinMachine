import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
  // 1. get machines - returns first machine (hard coding) - DONE
  // 2. Use machineId to get all positions for that machine - DONE
  // 3. use machineId to get all snack positions
  // 4. use the uid of snakPositions/positions to get available snack from the machine
  // 5. SMASH EM' - return an array of positions ( in order A1, A2, A3, B1 ...)
  // so positions should have position.snack if a snack exists at that position
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => resolve(snackPositions));
    })
    .catch((error) => reject(error));
});

export default { getCompleteMachine };
