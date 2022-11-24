import {useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './index.css';
const BackButton = () => {
    const navigate = useNavigate()

    function handleClick() {
        navigate(-1);
    }
    

  return (
    <div className="back" onClick={handleClick}>
      <div className="arrow-icon">
          <ArrowBackIosNewIcon />
      Back
      </div>
    </div>
  );
};

export default BackButton;
