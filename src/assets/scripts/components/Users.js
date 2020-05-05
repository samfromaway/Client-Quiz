import React from 'react';
import Useritem from './UserItem';

const Users = (users) => {
  {
    return (
      <div>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
