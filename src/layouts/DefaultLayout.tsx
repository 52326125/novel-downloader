import { AppBar, Stack } from "@mui/material";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <Stack>
      <AppBar position="sticky">123</AppBar>
      <Outlet />
    </Stack>
  );
}
