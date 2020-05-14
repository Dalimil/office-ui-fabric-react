import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

// TODO: should we reconsider name
const TenantWorkIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M9.219,22.062A1.206,1.206,0,0,1,8,20.922V13.141a1.207,1.207,0,0,1,1.156-1.258h3.633c.1,0,.2.039.211-.094.016-.273-.008-.57-.008-.844a1,1,0,0,1,.969-1.007h4.008a1.021,1.021,0,0,1,.984.742,7.352,7.352,0,0,1,.024,1.109c0,.078.031.094.1.094h3.7A1.2,1.2,0,0,1,24,13.047V20.9a1.209,1.209,0,0,1-1.281,1.164Zm13.64-6.609c-.031.016-.07.031-.1.047-.758.375-1.508.773-2.266,1.156-.719.36-1.6.766-2.281,1.156a.248.248,0,0,0-.156.266.824.824,0,0,1-.813.82H14.758a.755.755,0,0,1-.446-.14c-.476-.328-.281-.789-.453-.891s-.375-.187-.554-.281l-2.555-1.3c-.539-.273-1.07-.578-1.617-.82v.125c0,1.711.008,3.414.008,5.125,0,.187-.039.211.2.211H22.719c.125,0,.148-.024.148-.149V15.555A.435.435,0,0,0,22.859,15.453Zm-4.8,1.383c.086-.016.641-.313.758-.375l2.532-1.289c.476-.242.976-.477,1.445-.734.039-.024.07-.047.07-.094V13.117a.094.094,0,0,0-.1-.1H9.227a.088.088,0,0,0-.094.1c0,.406-.031.844.008,1.242.007.1.25.2.336.235,1.492.758,2.992,1.492,4.468,2.273-.007-.508.25-.976.821-.976h2.476C17.812,15.891,18.023,16.352,18.062,16.836ZM17.9,11.883c.063,0,.094-.016.094-.086v-.781c0-.063-.023-.094-.086-.094H14.07c-.07,0-.086.031-.086.094v.757c0,.11,0,.11.11.11Zm-1.07,5.89c.063,0,.094-.015.094-.085v-.579c0-.062-.016-.086-.078-.086H15.156c-.062,0-.078.024-.078.086v.579c0,.07.031.085.094.085Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M17.234,18.891H14.766a.745.745,0,0,1-.735-.844L8,14.977v6.007a1.114,1.114,0,0,0,1.109,1.11H22.891A1.114,1.114,0,0,0,24,20.984V14.961l-6.031,3.07C17.969,18.492,17.75,18.891,17.234,18.891ZM19.023,12V10.828a1.017,1.017,0,0,0-1.007-.922H13.922a.983.983,0,0,0-.36.078c-.812.368-.617,1.289-.617,2.016H9.109A1.1,1.1,0,0,0,8,13.109v.836c2.023.993,4.023,2.047,6.031,3.071,0-.485.149-.954.735-.954h2.468c.571,0,.735.454.735.93L24,13.922v-.813A1.1,1.1,0,0,0,22.891,12Zm-5.062-.062V10.922h4.055v1.016Z"
      />
    </svg>
  ),
  displayName: 'TenantWorkIcon',
});

export default TenantWorkIcon;