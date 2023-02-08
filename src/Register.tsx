import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { SelfRegistration } from './models';

interface RegisterProps {
  onSave: (newData: SelfRegistration) => void;
}

function Register({ onSave }: RegisterProps) {
  const [newData, setNewData] = useState<SelfRegistration>({
    id: 0,
    date: '2023-02-10T22:51',
    emotion: '',
    questions: '',
    situation: '',
    thoughts: '',
  });

  function changeData<T>(key: keyof SelfRegistration, value: T) {
    setNewData({ ...newData, [key]: value });
  }

  return (
    <>
      <Grid container width="100%" spacing={2} mb={4}>
        <Grid item xs={2}>
          <Typography variant="h4">Fecha</Typography>
          <TextField
            variant="outlined"
            type="datetime-local"
            value={newData.date}
            onChange={({ target }) => {
              debugger;
              changeData('date', target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4">Situación</Typography>
          <TextField
            variant="outlined"
            value={newData.situation}
            onChange={({ target }) => changeData('situation', target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4">Emoción (1-10)</Typography>
          <TextField
            variant="outlined"
            value={newData.emotion}
            onChange={({ target }) => changeData('emotion', target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">Pensamientos</Typography>
          <TextField
            variant="outlined"
            value={newData.thoughts}
            onChange={({ target }) => changeData('thoughts', target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">¿Como lo resolví? ¿Que hice?</Typography>
          <TextField
            variant="outlined"
            value={newData.questions}
            onChange={({ target }) => changeData('questions', target.value)}
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={() => onSave(newData)}>
        Guardar
      </Button>
    </>
  );
}

export default Register;
