import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button
} from "@mui/material";
import { useUsersContext } from './users-provider';

export const UsersTable = () => {
  const { users, createEditUserTemplate, deleteUser } = useUsersContext();

  const handleEditUserAction = (user) => {
    createEditUserTemplate(user);
  }

  const handleDeleteUserAction = (user) => {
    deleteUser(user);
  }  

  const renderUsers = (users) => {
    return users.map(user => {
      return (
        <TableRow key={user.id}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="info"
                onClick={() => handleEditUserAction(user)}>
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteUserAction(user)}>
                Delete
              </Button>              
            </div>
          </TableCell>
        </TableRow>
      );
    })
  }
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderUsers(users)}</TableBody>
      </Table>
    </TableContainer>
  );
}