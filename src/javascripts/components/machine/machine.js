import machineData from '../../helpers/data/smash';
import './machine.scss';

const buildTheMachine = () => {
  machineData.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
