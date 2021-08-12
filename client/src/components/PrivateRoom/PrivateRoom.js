import React from 'react';
import { useSelector } from 'react-redux';
import RoomTabs from './RoomTabs';

export default function PrivateRoom() {

  const myCards = useSelector(state => state.myCards);

  console.log("----->", myCards);

  return (
    <div>
    <RoomTabs/>
    </div>
  );
  }
