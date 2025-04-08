import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import { ROUTES } from '../../constants';
import './styles.css';

function HelloWorld(): React.JSX.Element {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate(ROUTES.home);
  };

  return (
    <div className="flex d-col j-center mh-auto page width">
      <div className="flex d-col mh-auto width">
        <div className="page-title ns t-center">
          Hello World
        </div>
        <div className="subtitle mt-1 ns t-center">
          Welcome to the application!
        </div>
        <Button
          classes="mt-2"
          onClick={handleGoToHome}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default HelloWorld;
