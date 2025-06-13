import {
  TableCell,
  TableRow,
  styled,
  tableCellClasses,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
} from "@mui/material";

const drawerWidth = 260;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2d2d2d",
    color: "#00f7ff",
    fontWeight: 600,
    fontSize: "0.95rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.88rem",
    color: "#e0e0e0",
    borderBottom: "1px solid #444",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#1e1e1e",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#292929",
  },
  "&:hover": {
    backgroundColor: "#333333",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#121212",
  color: "#ffffff",
  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.1)",
  borderBottom: "1px solid #2a2a2a",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#181818",
    color: "#ffffff",
    borderRight: "1px solid #2c2c2c",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      width: theme.spacing(8),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(10),
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
  },
}));
