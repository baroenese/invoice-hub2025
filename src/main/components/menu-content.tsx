import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { useRouter, usePathname } from 'next/navigation';

const mainListItems = [
    { id: "sdasd", href: "/invoices", text: 'Home', icon: <HomeRoundedIcon /> },
    { id: "fdgdfg", href: "/invoices/add", text: 'Add Invoice', icon: <AnalyticsRoundedIcon /> },
    { id: "gdfggf", href: "/invoices/list", text: 'My Invoices', icon: <AssignmentRoundedIcon /> },
];

export function MenuContent() {
    const router = useRouter()
    const path = usePathname()
    console.log(path)

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={path === item.href}
                            onClick={() => {
                                router.push(item.href)
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
