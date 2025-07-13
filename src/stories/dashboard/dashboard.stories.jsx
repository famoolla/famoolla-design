
// Dashboard.stories.js
import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Tabs,
  Tab,
  Paper,
  Fab,
  CssBaseline,
} from '@mui/material';
import {
  AttachMoney,
  Assessment,
  Warning,
  Diamond,
  Add,
  Email,
  GetApp,
  Calculate,
} from '@mui/icons-material';



// Dashboard Component
const Dashboard = ({
  totalOutstanding = 4850,
  activeLoans = 7,
  overdueAmount = 320,
  interestEarned = 247,
  loans = [],
  activities = [],
  onLoanClick,
  onActionClick,
  activeFilter = 'all',
  onFilterChange,
}) => {
  const [tabValue, setTabValue] = React.useState(0);

  const defaultLoans = [
    {
      id: 1,
      borrower: 'Sarah Johnson',
      amount: 1200,
      interest: 45.00,
      dueDate: 'Dec 15, 2024',
      rate: '2.5%',
      status: 'active'
    },
    {
      id: 2,
      borrower: 'Mike Chen',
      amount: 800,
      interest: 72.00,
      dueDate: 'Nov 28, 2024',
      rate: '3.0%',
      status: 'overdue'
    },
    {
      id: 3,
      borrower: 'Emma Rodriguez',
      amount: 650,
      interest: 26.00,
      dueDate: 'Jan 10, 2025',
      rate: '2.0%',
      status: 'active'
    },
    {
      id: 4,
      borrower: 'James Wilson',
      amount: 1500,
      interest: 84.00,
      dueDate: 'Dec 5, 2024',
      rate: '2.8%',
      status: 'active'
    },
    {
      id: 5,
      borrower: 'Lisa Park',
      amount: 400,
      interest: 20.30,
      dueDate: 'Nov 15, 2024',
      rate: '2.5%',
      status: 'paid'
    }
  ];

  const defaultActivities = [
    {
      id: 1,
      icon: '✓',
      text: 'Payment received from Lisa Park',
      time: '2 hours ago',
      color: 'success'
    },
    {
      id: 2,
      icon: '⚠',
      text: 'Mike Chen\'s loan is overdue',
      time: '1 day ago',
      color: 'warning'
    },
    {
      id: 3,
      icon: '💰',
      text: 'Interest earned: $18.50',
      time: '3 days ago',
      color: 'primary'
    },
    {
      id: 4,
      icon: '📊',
      text: 'New loan added for Emma Rodriguez',
      time: '1 week ago',
      color: 'secondary'
    }
  ];

  const displayLoans = loans.length > 0 ? loans : defaultLoans;
  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  const filteredLoans = displayLoans.filter(loan => {
    if (activeFilter === 'all') return true;
    return loan.status === activeFilter;
  });

  const statCards = [
    {
      title: 'Total Outstanding',
      value: `$${totalOutstanding.toLocaleString()}`,
      change: '+$125 this month',
      icon: <AttachMoney />,
      color: 'primary',
      positive: true
    },
    {
      title: 'Active Loans',
      value: activeLoans,
      change: '2 new this month',
      icon: <Assessment />,
      color: 'secondary',
      positive: null
    },
    {
      title: 'Overdue Amount',
      value: `$${overdueAmount}`,
      change: '3 loans overdue',
      icon: <Warning />,
      color: 'warning',
      positive: false
    },
    {
      title: 'Interest Earned',
      value: `$${interestEarned}`,
      change: '+$18.50 this month',
      icon: <Diamond />,
      color: 'success',
      positive: true
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'overdue': return 'warning';
      case 'paid': return 'primary';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', p: 3 }}>
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          p: 5,
          mb: 4,
          background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
            pointerEvents: 'none',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            💰 Famoolla
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Track your loans and earn interest from friends and family
          </Typography>
        </Box>
      </Paper>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {statCards.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', cursor: 'pointer' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{ fontWeight: 600, letterSpacing: 1 }}
                  >
                    {stat.title}
                  </Typography>
                  <Avatar
                    sx={{
                      bgcolor: `${stat.color}.main`,
                      width: 50,
                      height: 50,
                      boxShadow: 3
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                </Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 800, mb: 1, fontSize: '2.5rem' }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  color={stat.positive === true ? 'success.main' : stat.positive === false ? 'error.main' : 'text.secondary'}
                  sx={{ fontWeight: 500 }}
                >
                  {stat.positive === true ? '↗ ' : stat.positive === false ? '↘ ' : ''}{stat.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Content */}
      <Grid container spacing={5}>
        {/* Loans Section */}
        <Grid item xs={12} lg={8}>
          <Card>
            <Box sx={{ p: 4, borderBottom: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h2" component="h2">
                  Your Loans
                </Typography>
                <Tabs
                  value={tabValue}
                  onChange={(e, newValue) => {
                    setTabValue(newValue);
                    const filters = ['all', 'active', 'overdue', 'paid'];
                    onFilterChange?.(filters[newValue]);
                  }}
                >
                  <Tab label="All" />
                  <Tab label="Active" />
                  <Tab label="Overdue" />
                  <Tab label="Paid" />
                </Tabs>
              </Box>
            </Box>
            
            <List>
              {filteredLoans.map((loan, index) => (
                <ListItem
                  key={loan.id}
                  onClick={() => onLoanClick?.(loan)}
                  sx={{
                    py: 3,
                    px: 4,
                    borderBottom: index < filteredLoans.length - 1 ? 1 : 0,
                    borderColor: 'divider',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {loan.borrower}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          Due: {loan.dueDate} • {loan.rate} monthly interest
                        </Typography>
                        <Chip
                          label={loan.status}
                          color={getStatusColor(loan.status)}
                          size="small"
                          sx={{ textTransform: 'uppercase', fontWeight: 600 }}
                        />
                      </Box>
                    }
                  />
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                      ${loan.amount.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="success.main" sx={{ fontWeight: 500 }}>
                      +${loan.interest.toFixed(2)} earned
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Quick Actions */}
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h2" component="h3" sx={{ mb: 3 }}>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Add />}
                    onClick={() => onActionClick?.('add')}
                    sx={{ py: 2 }}
                  >
                    Add New Loan
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Email />}
                    onClick={() => onActionClick?.('reminder')}
                    sx={{ py: 2 }}
                  >
                    Send Reminder
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Assessment />}
                    onClick={() => onActionClick?.('reports')}
                    sx={{ py: 2 }}
                  >
                    View Reports
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<GetApp />}
                    onClick={() => onActionClick?.('export')}
                    sx={{ py: 2 }}
                  >
                    Export Data
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Calculate />}
                    onClick={() => onActionClick?.('calculate')}
                    sx={{ py: 2 }}
                  >
                    Calculate Interest
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h2" component="h3" sx={{ mb: 3 }}>
                  Recent Activity
                </Typography>
                <List sx={{ p: 0 }}>
                  {displayActivities.map((activity, index) => (
                    <ListItem
                      key={activity.id}
                      sx={{
                        px: 0,
                        py: 2,
                        borderBottom: index < displayActivities.length - 1 ? 1 : 0,
                        borderColor: 'divider',
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            bgcolor: `${activity.color}.main`,
                            width: 40,
                            height: 40,
                            fontSize: '1rem',
                          }}
                        >
                          {activity.icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {activity.text}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
        }}
        onClick={() => onActionClick?.('quickAdd')}
      >
        <Add />
      </Fab>
    </Box>
  );
};

// Storybook Meta Configuration
export default {
  title: 'Dashboard/Famoolla Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive loan tracking dashboard with Material-UI Ocean theme. Features include loan management, statistics, recent activity tracking, and quick actions.',
      },
    },
  },
  argTypes: {
    totalOutstanding: {
      control: { type: 'number', min: 0, max: 100000, step: 100 },
      description: 'Total outstanding loan amount',
    },
    activeLoans: {
      control: { type: 'number', min: 0, max: 50 },
      description: 'Number of active loans',
    },
    overdueAmount: {
      control: { type: 'number', min: 0, max: 10000, step: 50 },
      description: 'Total overdue amount',
    },
    interestEarned: {
      control: { type: 'number', min: 0, max: 5000, step: 10 },
      description: 'Total interest earned',
    },
    activeFilter: {
      control: { type: 'select' },
      options: ['all', 'active', 'overdue', 'paid'],
      description: 'Active loan filter',
    },
    onLoanClick: { action: 'loan clicked' },
    onActionClick: { action: 'action clicked' },
    onFilterChange: { action: 'filter changed' },
  },
} ;

// Story Templates
const Template = (args) => <Dashboard {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  totalOutstanding: 4850,
  activeLoans: 7,
  overdueAmount: 320,
  interestEarned: 247,
  activeFilter: 'all',
};

// High Volume Story
export const HighVolume = Template.bind({});
HighVolume.args = {
  totalOutstanding: 25430,
  activeLoans: 23,
  overdueAmount: 1250,
  interestEarned: 1847,
  activeFilter: 'all',
};
HighVolume.parameters = {
  docs: {
    description: {
      story: 'Dashboard with higher loan volumes and earnings.',
    },
  },
};

// Low Activity Story
export const LowActivity = Template.bind({});
LowActivity.args = {
  totalOutstanding: 850,
  activeLoans: 2,
  overdueAmount: 0,
  interestEarned: 47,
  activeFilter: 'all',
};
LowActivity.parameters = {
  docs: {
    description: {
      story: 'Dashboard for users with minimal loan activity.',
    },
  },
};

// Overdue Focus Story
export const OverdueFocus = Template.bind({});
OverdueFocus.args = {
  totalOutstanding: 4850,
  activeLoans: 7,
  overdueAmount: 1320,
  interestEarned: 247,
  activeFilter: 'overdue',
};
OverdueFocus.parameters = {
  docs: {
    description: {
      story: 'Dashboard focused on overdue loans with filter applied.',
    },
  },
};

// Custom Data Story
export const CustomData = Template.bind({});
CustomData.args = {
  totalOutstanding: 8750,
  activeLoans: 12,
  overdueAmount: 450,
  interestEarned: 523,
  loans: [
    {
      id: 1,
      borrower: 'Alice Cooper',
      amount: 2500,
      interest: 125.00,
      dueDate: 'Jan 20, 2025',
      rate: '2.8%',
      status: 'active'
    },
    {
      id: 2,
      borrower: 'Bob Dylan',
      amount: 1800,
      interest: 90.00,
      dueDate: 'Dec 10, 2024',
      rate: '3.2%',
      status: 'overdue'
    },
  ],
  activities: [
    {
      id: 1,
      icon: '💰',
      text: 'Large payment received from Alice Cooper',
      time: '1 hour ago',
      color: 'success'
    },
    {
      id: 2,
      icon: '📈',
      text: 'Interest rate updated for Bob Dylan',
      time: '3 hours ago',
      color: 'primary'
    },
  ],
  activeFilter: 'all',
};
CustomData.parameters = {
  docs: {
    description: {
      story: 'Dashboard with custom loan data and activities.',
    },
  },
};

// Empty State Story
export const EmptyState = Template.bind({});
EmptyState.args = {
  totalOutstanding: 0,
  activeLoans: 0,
  overdueAmount: 0,
  interestEarned: 0,
  loans: [],
  activities: [],
  activeFilter: 'all',
};
EmptyState.parameters = {
  docs: {
    description: {
      story: 'Dashboard in empty state with no loans or activities.',
    },
  },
};