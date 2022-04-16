import { useState } from 'react'
import './App.css';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { AppBar, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import MenuIcon from './icons/MenuIcon';
import { Dashboard } from './pages/Dashboard';
const drawerWidth = 240;

const styles = {
  mainCanvas: {
    backgroundColor: "white", 
    height: "calc(96vh - 62px)", 
    width: "calc(90vw)", 
    padding: "15px",
    marginTop: "62px",
    overflow: "hidden",
    transition: "margin-left 0.2s",
    display: "flex",
  },
  navBar: {
    backgroundColor: "white",
    color: "black",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: "1rem",
    padding: "0.4rem 1rem",
    alignItems: "center",
    height: "65px",
    boxShadow: "none",
  },
}

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(true);
  const theme = useTheme();

  return (
    <Box className="App" sx={{ display: "flex"}}>
      <AppBar position="fixed" sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ...styles.navBar,
        }}>
        <span><b> Johans Neira Data Viz Portfolio </b></span> 
          <Button 
            variant='outlined' 
            onClick={ ()=> setDrawerVisible(!drawerVisible)}
            style={{
              padding: "0",
              minWidth: "2rem",
            }}>
              <MenuIcon />
          </Button>
      </AppBar>
      
    <Drawer
      variant="persistent"
      anchor={'left'}
      open={ drawerVisible }
      onClose={ () => setDrawerVisible(false) }
      sx={{
        width: 240,
        flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            borderRight: "none",
            padding: "1rem",
          }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', 
        borderRight: "none", }}>
          <List>
            {['Dashboard', 'Web Portfolio', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? "1" : "2"}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? "1" : "2"}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
    </Drawer>
    <div style={{
      ...styles.mainCanvas,
      marginLeft: drawerVisible ? 0 : `-${drawerWidth}px`,
      width: `calc(100vw + ${!drawerVisible ? 0 : drawerWidth}px)`,
    }}>
      <Dashboard />
    </div>
    </Box>
  )
}

export default App
