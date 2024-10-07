import React from 'react';
import './Grid.css'; // Import the CSS file for styling
import g1 from '../../../assets/grid/g1.png'
import g2 from '../../../assets/grid/g2.png'
import g3 from '../../../assets/grid/g3.png'
import g4 from '../../../assets/grid/g4.png'
import g5 from '../../../assets/grid/g5.png'
import g6 from '../../../assets/grid/g6.png'

const ImageGrid = () => {
  return (
    

    <div className='grid_container'>
        <div className='grid_content'>
            <div className='grid_col1'>
                <img src={g1} alt="" srcset="" className='ig1'/>
                <img src={g4} alt="" srcset="" className='ig4'/>
            </div>
            <div className='grid_col2'>
                <img src={g2} alt="" srcset="" className='ig2' />
                <img src={g5} alt="" srcset=""className='ig5' />
            </div>
            <div className='grid_col3'>
                <img src={g3} alt="" srcset="" className='ig3'/>
                <img src={g6} alt="" srcset="" className='ig6'/>
            </div>

        </div>
    </div>
  );
};

export default ImageGrid;
