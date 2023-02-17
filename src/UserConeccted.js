import { useProfile } from 'react-facebook';

const UserConeccted = () => {
  const { profile, isLoading, error } = useProfile(['id', 'name']);

  return (
    <div>
      UserConeccted
      <h3>{profile?.name} has id: {profile?.id}</h3>
      </div>
  )
}

export default UserConeccted