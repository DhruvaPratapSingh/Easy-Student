import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import cardData from '../../utils/cardData';
import FileUpload from './Fileupload';


const LearnMore = () => {
  const { id } = useParams();
  const card = cardData.find(card => card.id.toString() === id);

  if (!card) {
    return(
       <div className='flex flex-col gap-10 justify-center items-center'>
        <Typography variant="h6" color="error">Data will be uploaded shortly....</Typography>
        <img className='flex justify-center items-center' src="/waiting.gif" />
       </div>
       
    )
  }

  return (
    <div className='text-center'>
      <Typography gutterBottom variant="h3" component="div">
        {card.title}
      </Typography>
      <Typography paragraph >{card.description}</Typography>
      <Typography paragraph>
        <p className='font-medium text-xl'>experience:{card.experience}</p>
      </Typography>
      <Typography paragraph>
       
      </Typography>
      <Typography paragraph>
        {card.para1}
      </Typography>
      <Typography paragraph>
       {card.para2};
      </Typography>
      <Typography>
       <p className='text-xl font-medium'>skills:{card.skills}</p>
      </Typography>
      {/* <button className='bg-blue-600 py-1 px-3 rounded-xl font-medium hover:bg-blue-400 mt-5'>Apply</button> */}
      <FileUpload />
    </div>
  );
};

export default LearnMore;
