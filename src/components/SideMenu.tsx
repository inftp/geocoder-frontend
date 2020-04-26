import React from 'react';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.css';

interface ISideMenuProps {
  visible?: boolean,
  close: () => void,
}

const SideMenuPropTypes = {
  visible: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

const SideMenuDefaultProps = {
  visible: false,
}

const SideMenu = ({visible, close, children}: React.PropsWithChildren<ISideMenuProps>) => (
  <div className={`side-menu${visible ? ' visible' : ''}`}>
    {children}
    <div className="close-button" role="button" onClick={close}>
      <i className="fas fa-times"></i>
    </div>
  </div>
);

SideMenu.propTypes = SideMenuPropTypes;
SideMenu.defaultProps = SideMenuDefaultProps;

export default SideMenu;