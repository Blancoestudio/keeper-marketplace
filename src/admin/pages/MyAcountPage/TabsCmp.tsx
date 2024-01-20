import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { UserInfo } from './UserInfo';
import { BillingInfo } from './BillingInfo';
import { BusinessInfoTab } from './BusinessInfoTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsCmp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} py={5}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="animate__animated animate__fadeIn">
        <Tabs value={value} onChange={handleChange} aria-label="profile tab">
          <Tab label="Sobre ti:" {...a11yProps(0)} />
          <Tab label="Datos de tu negocio:" {...a11yProps(1)} />
          <Tab label="Plan y Facturación:" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UserInfo />   
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BusinessInfoTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BillingInfo />
      </CustomTabPanel>
    </Box>
  );
}