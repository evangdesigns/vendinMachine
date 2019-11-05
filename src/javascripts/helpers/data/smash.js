import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  // 1. get machines - returns first machine (hard coding) - DONE
  machineData.getMachine()
    // 2. Use machineId to get all positions for that machine - DONE
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    // 3. use machineId to get all snack positions - DONE
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          // 4. use the uid of snackPositions/positions to get available snack from the machine - DONE
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            // 5. SMASH EM' - return an array of positions (in order A1, A2, A3, B1 ...)
            const newPositions = [];
            positions.forEach((position) => {
              const newP = { ...position };
              const getSnackPosition = snackPositions.find((x) => x.positionId === newP.id);
              if (getSnackPosition) {
                const snack = snacks.find((x) => x.id === getSnackPosition.snackId);
                newP.snack = snack;
              } else {
                newP.snack = {};
              }
              newPositions.push(newP);
            });
            resolve(newPositions);
          });
        });
    })

    // so positions should have position.snack if a snack exists at that position
    .catch((error) => reject(error));
});

const getSnacksWithPositions = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            const newSnacks = [];
            snacks.forEach((snack) => {
              const newSnack = { ...snack };
              const getSnackPosition = snackPositions.find((x) => x.snackId === newSnack.id);
              if (getSnackPosition) {
                const getPosition = positions.find((x) => x.id === getSnackPosition.positionId);
                newSnack.position = getPosition;
                newSnack.snackPositionId = getSnackPosition.id;
              } else {
                newSnack.position = [];
                newSnack.snackPositionId = '';
              }
              newSnacks.push(newSnack);
            });
            resolve(newSnacks);
          });
        });
    })
    .catch((error) => reject(error));
});

const getAvailablePositions = () => new Promise((resolve, reject) => {
  machineData.getMachine().then((machine) => {
    positionData.getAllPositionsByMachineId(machine.id).then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(machine.id).then((snackPositions) => {
        const newPositions = [];
        positions.forEach((position) => {
          const newPosition = { ...position };
          const getSnackPosition = snackPositions.find((x) => x.positionId === newPosition.id);
          if (!getSnackPosition) {
            newPosition.machineId = machine.id;
            newPositions.push(newPosition);
          }
        });
        resolve(newPositions);
      });
    });
  })
    .catch((error) => reject(error));
});

export default { getCompleteMachine, getSnacksWithPositions, getAvailablePositions };
