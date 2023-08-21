import React from 'react';
export default function FooterCopyright({copyright}) {
  return (
    <div
      className="t14sm-t16lg font-gray-500"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: copyright}}
    />
  );
}
