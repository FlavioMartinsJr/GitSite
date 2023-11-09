import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export const Alerts = () =>  {
 
    return (
        <div className='popup'>
            <Alert severity="error">This is an error alert — check it out!</Alert>
        </div>
        
  );
}