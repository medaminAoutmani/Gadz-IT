import { useNavigate } from 'react-router-dom';

const useCustomHistory = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return { navigateTo };
};

export default useCustomHistory;