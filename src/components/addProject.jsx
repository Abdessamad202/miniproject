import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const AddProject = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projectData, setProjectData] = useState({
    titre: '',
    description: '',
    date_debut_globale: '',
    date_fin_globale: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Project Data:', projectData);
    // Close the popup after submission
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setIsPopupOpen(true)}>
        Add Project
      </Button>

      <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <DialogTitle>Add Project</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="Titre de projet"
              name="titre"
              value={projectData.titre}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              value={projectData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date de début globale"
              name="date_debut_globale"
              type="date"
              value={projectData.date_debut_globale}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date de fin globale"
              name="date_fin_globale"
              type="date"
              value={projectData.date_fin_globale}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsPopupOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export { AddProject };