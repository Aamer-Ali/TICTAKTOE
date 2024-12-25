import React from 'react';
import type {PropsWithChildren} from 'react';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <FontAwesome6 name="circle" size={40} color="green" />;

    case 'cross':
      return <FontAwesome6 name="x" size={40} iconStyle="solid" color="red" />;

    default:
      return (
        <FontAwesome6
          name="pencil"
          size={40}
          iconStyle="solid"
          color="lightgray"
        />
      );
  }
};

export default Icons;
