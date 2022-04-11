import { useState } from 'react'
import './App.css';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false)

  return (
    <Box className="App" sx={{ display: "flex"}}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Johans Neira Data Viz portfolio
          </Typography>
        </Toolbar>
          <Button variant='contained' onClick={ ()=> setDrawerVisible(!drawerVisible)}>Drawer</Button>
      </AppBar>
      
    <Drawer
      anchor={'left'}
      open={ drawerVisible }
      onClose={ () => setDrawerVisible(false) }
      sx={{top:"88px"}}
    >
      <Box
        sx={{width:250}}>

      </Box>
    </Drawer>
      <main style={{backgroundColor: "#E3F2FD", height: "100vh"}}></main>
    </Box>
  )
}

export default App
