import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Conocenos
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logros
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cortos
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Presentaciones
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
