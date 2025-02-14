import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { GridCellParams, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Menu from '@mui/icons-material/Menu';

export function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderStatus(status: 'Paid' | 'Unpaid' | 'Pending') {
  const colors: { [index: string]: 'success' | 'default' | 'error' | 'warning' } = {
    Paid: 'success',
    Pending: 'warning',
    Unpaid: 'error',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
  params: GridCellParams<{ name: string; color: string }, any, any>,
) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns: GridColDef[] = [
  { field: 'invoice', headerName: 'Invoice', flex: 1.5, minWidth: 200 },
  {
    field: 'due_date',
    headerName: 'Due Date',
    align: 'center',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params) => renderStatus(params.value as any),
  },

  {
    field: 'amount',
    headerName: 'Amount',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    align: 'center',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => {
      return (
        <Button>
          <Menu />
        </Button>
      )
    },
  },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    invoice: 'Homepage Overview',
    status: 'Paid',
    amount: 8345,
    actions: '2m 15s',
  },
  {
    id: 2,
    invoice: 'Product Details - Gadgets',
    status: 'Paid',
    amount: 5653,
    actions: '2m 30s',
  },
  {
    id: 3,
    invoice: 'Checkout Process - Step 1',
    status: 'Unpaid',
    amount: 3455,
    actions: '2m 10s',
  },
  {
    id: 4,
    invoice: 'User Profile Dashboard',
    status: 'Pending',
    amount: 112543,
    actions: '2m 40s',
  },
  {
    id: 5,
    invoice: 'Article Listing - Tech News',
    status: 'Unpaid',
    amount: 3653,
    actions: '2m 55s',
  },
  {
    id: 6,
    invoice: 'FAQs - Customer Support',
    status: 'Pending',
    amount: 106543,
    actions: '2m 20s',
  },
  {
    id: 7,
    invoice: 'Product Comparison - Laptops',
    status: 'Paid',
    amount: 7853,
    actions: '2m 50s',
  },
  {
    id: 8,
    invoice: 'Shopping Cart - Electronics',
    status: 'Unpaid',
    amount: 8563,
    actions: '3m 10s',
  },
  {
    id: 9,
    invoice: 'Payment Confirmation - Bank Transfer',
    status: 'Unpaid',
    amount: 4563,
    actions: '3m 25s',
  },
  {
    id: 10,
    invoice: 'Product Reviews - Smartphones',
    status: 'Paid',
    amount: 9863,
    actions: '3m 05s',
  },
  {
    id: 11,
    invoice: 'Subscription Management - Services',
    status: 'Paid',
    amount: 6563,
    actions: '3m 15s',
  },
  {
    id: 12,
    invoice: 'Order Tracking - Shipments',
    status: 'Paid',
    amount: 12353,
    actions: '3m 20s',
  },
  {
    id: 13,
    invoice: 'Customer Feedback - Surveys',
    status: 'Unpaid',
    amount: 5863,
    actions: '3m 30s',
  },
  {
    id: 14,
    invoice: 'Account Settings - Preferences',
    status: 'Pending',
    amount: 7853,
    actions: '3m 15s',
  },
  {
    id: 15,
    invoice: 'Login Page - Authentication',
    status: 'Paid',
    amount: 9563,
    actions: '3m 35s',
  },
];
