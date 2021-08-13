/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Popover } from 'reactstrap';
import MarkerCard from './MarkerCard';

const MarkerPopOver = (props) => {
  const {
    setPopoverOpen,
    popoverOpen,
    title,
    difficulty,
    rating,
    address,
    length,
    description
  } = props;

  // const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      {/* <Popover placement="bottom" isOpen={popoverOpen}  toggle={toggle}> */}
      <MarkerCard className={"MCard"} title={title} difficulty={difficulty} rating={rating} address={address} length={length} description={description}/>
      {/* </Popover> */}
    </div>
  );
}

export default MarkerPopOver;



