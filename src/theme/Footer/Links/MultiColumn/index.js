import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({column}) {
  return (
    <ul className="section__width section__width--small links__wrapper">
      {column.items.map((item, i) => (
        <ColumnLinkItem key={i} item={item} />
      ))}
    </ul>
  );
}
export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
