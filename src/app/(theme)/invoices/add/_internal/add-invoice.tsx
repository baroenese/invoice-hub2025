'use client';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormAdapter } from './form-adapter';

export function AddInvoice() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Add Invoice
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <FormAdapter />
                </Grid>
            </Grid>
        </Box>
    );
}
