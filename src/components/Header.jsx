import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <header>
      <AppBar color="action" position="static">
        <Toolbar>
          <img src="/logo.png" style={{ width: 100, cursor: "pointer" }} />
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
