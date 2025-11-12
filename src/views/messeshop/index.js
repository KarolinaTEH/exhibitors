import React from 'react';
import { ResourceAbout } from '../../components';
export {default as DeliveryIcon} from '@material-ui/icons/LocalShipping';

const MesseShop = () => {
  return (
    <ResourceAbout
      label="logistics.timeline.items.messeshop.title"
      descriptionLabel="logistics.timeline.items.messeshop.description"
      aside={false}
    />
  );
};

export default MesseShop;
