import React from 'react';
import { Popover, Position, Menu, LogOutIcon, CircleArrowRightIcon, EditIcon, TrashIcon, Button, Avatar } from 'evergreen-ui'
import useAuth from '../../hooks/useAuth';


const Menus = () => {

  const {user,logOut} = useAuth()
    return (
        <div>
            <Popover
  position={Position.BOTTOM_LEFT}
  content={
    <Menu>
      <Menu.Group>
        <Menu.Item onClick={logOut} icon={LogOutIcon} intent="danger">
          Log out
        </Menu.Item>
      </Menu.Group>
    </Menu>
  }
>
  {/* <Button marginRight={16}><Avatar name="Jeroen Ransijn" size={40} /></Button> */}
  <Avatar   name={user.displayName || 'A'} size={40} />
</Popover>
        </div>
    );
};

export default Menus;