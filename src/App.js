import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained" style={{ color: "red" }}>
        Contained
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        삭제
      </Button>
      <br />
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" disabled size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </>
  );
}

export default App;
