import { UsersProvider } from './components/users-provider';
import { Users } from './components/users';
import { useUsers } from './api/use-users';


// https://www.frontendly.dev/ihor-filippov/build-a-crud-app-in-react-with-tanstack-query-and-material-ui/6

export default function App() {
  const { isFetching, isError, data } = useUsers();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <UsersProvider data={data}>
      <Users />
    </UsersProvider>
  );
}