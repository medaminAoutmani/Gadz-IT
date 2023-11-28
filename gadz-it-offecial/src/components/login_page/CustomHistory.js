import { useHistory } from 'react-router-dom';

const useCustomHistory = () => {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return { navigateTo };
};

export default useCustomHistory;