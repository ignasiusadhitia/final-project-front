import { useNavigate } from 'react-router-dom';

export const useErrorHandler = () => {
  const navigate = useNavigate();

  const handleError = (error) => {
    const status = error?.response?.status;

    switch (status) {
      case 401:
        navigate('/401');
        break;
      case 403:
        navigate('/401'); // Using 401 page for forbidden access
        break;
      case 404:
        navigate('/404');
        break;
      case 500:
        navigate('/500');
        break;
      default:
        navigate('/404');
    }
  };

  return { handleError };
};
