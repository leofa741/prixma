import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { IoMdCloudOutline } from "react-icons/io";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { FcTemplate } from "react-icons/fc";

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { DiAngularSimple,DiCode,DiNodejsSmall } from "react-icons/di";

export default function CustomizedTimeline() {
  return (
    <Box

     sx={{ maxWidth: 1400, mx: 'auto', my: 5,
     
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    
      bgcolor: '#f5f5f5',
     }}>
      <Typography variant="h3" component="div" sx={{ fontWeight: 300 , 
      fontFamily: 'Roboto', fontSize: 30,  }}>
    
        Tecnologías a utilizar
      </Typography>
    <Timeline position="alternate">
    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          User
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <FcTemplate
            fontSize="2rem"
             />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>          
          <Typography>
            Views
             </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
         FrontEnd
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{ bgcolor: '#fff ' }}
           
          >
            <DiAngularSimple
            style={{color: '#FB040E', fontSize: '2rem'}}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Angular
          </Typography>
          
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Code
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <DiCode
            fontSize="2rem"
             />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>          
          <Typography>
            typescript,  html, css, bootstrap, material-ui
             </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
            BackEnd
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <DiNodejsSmall 
            fontSize="2rem"
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Nodejs
          </Typography>
          <Typography>
             express, mongoDB, mongoose
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Deploy
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <IoMdCloudOutline
            fontSize="2rem"
             />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">                       

          </Typography>
          <Typography>
            Vercel, Heroku , MongoDB Atlas
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
  );
}
