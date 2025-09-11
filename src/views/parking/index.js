import React from 'react';
import { ResourceAbout } from '../../components';
export {default as DeliveryIcon} from '@material-ui/icons/LocalShipping';

const Parking = () => {
  return (
    <ResourceAbout
      label="logistics.timeline.items.parking.title"
      descriptionLabel="logistics.timeline.items.parking.description"
      aside={false}
    />
  );
};

export default Parking;
