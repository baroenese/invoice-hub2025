// import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useState } from 'react';
// import AddressForm from './components/AddressForm';
// import Info from './components/Info';
// import InfoMobile from './components/InfoMobile';
// import PaymentForm from './components/PaymentForm';
// import Review from './components/Review';
// import SitemarkIcon from './components/SitemarkIcon';
// import AppTheme from './theme/AppTheme';

import { FormInvoice } from './form';
// import ColorModeIconDropdown from './theme/ColorModeIconDropdown';

const steps = ['Shipping address', 'Payment details', 'Review your order'];
// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }
export function FormAdapter(props: { disableCustomTheme?: boolean }) {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: {
            xs: '100%',
            sm: 'calc(100dvh - var(--template-frame-height, 0px))',
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}
      >
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <FormInvoice />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
