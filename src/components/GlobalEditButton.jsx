// src/components/GlobalEditButton.js

import { Button } from '@mui/material';
import useStore from '../store';

function GlobalEditButton() {
  const isEditing = useStore((state) => state.isEditing);
  const setIsEditing = useStore((state) => state.setIsEditing);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setIsEditing(!isEditing)}
    >
      {isEditing ? "Disable Edit Mode" : "Enable Edit Mode"}
    </Button>
  );
}

export default GlobalEditButton;
