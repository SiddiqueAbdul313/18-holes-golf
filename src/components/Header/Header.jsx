/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import DiamondIcon from "@mui/icons-material/Diamond";
import MembershipDialog from "../Membership/MembershipDialog";
import "./Header.css";

const pages = ["Home", "About", "Services", "News", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isMembershipDialogOpen, setMembershipDialogOpen] = useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleMembershipClick = () => setMembershipDialogOpen(true);
  const handleCloseMembershipDialog = () => setMembershipDialogOpen(false);

  const memback =
    "https://cdn.pixabay.com/photo/2015/12/02/21/12/golf-1073465_1280.jpg";

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters className="toolbar">
        <DiamondIcon />
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          className="logo"
        >
          !8Holes
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          className="menu-links"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              component={Link}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, ml: 2 }}>
          <Tooltip title="Subscribe">
            <Button
              startIcon={<PersonIcon />}
              onClick={handleMembershipClick}
              sx={{ border: "1px solid white" }}
              color="success"
              className="membershipBtn"
            >
              Membership
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>

      <MembershipDialog
        open={isMembershipDialogOpen}
        onClose={handleCloseMembershipDialog}
        memback={memback}
      />
    </Container>
  );
}

export default Header;
