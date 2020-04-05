import React, { useRef } from 'react';

import { SnapList, SnapItem, useVisibleElements, useScroll, useDragToScroll } from 'react-snaplist-carousel';

import styles from './styles.module.css';

const Item = ({ onClick, children, visible }) => (
  <div
    className={styles.item}
    style={{
      background: visible ? '#bce6fe' : '#cccccc',
      cursor: visible ? 'default' : 'pointer',
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

export const Vertical = () => {
  const snapList = useRef(null);
  const visible = useVisibleElements({ debounce: 10, ref: snapList }, ([element]) => element);
  const goToChildren = useScroll({ ref: snapList });
  useDragToScroll({ ref: snapList });

  return (
    <SnapList ref={snapList} direction="vertical" height="100%">
      <SnapItem margin={{ top: '20%', bottom: '15px' }} height="60%" snapAlign="center">
        <Item onClick={() => goToChildren(0)} visible={visible === 0}>
          Item 0
        </Item>
      </SnapItem>
      <SnapItem margin={{ top: '15px', bottom: '15px' }} height="60%" snapAlign="center">
        <Item onClick={() => goToChildren(1)} visible={visible === 1}>
          Item 1
        </Item>
      </SnapItem>
      <SnapItem margin={{ top: '15px', bottom: '15px' }} height="60%" snapAlign="center">
        <Item onClick={() => goToChildren(2)} visible={visible === 2}>
          Item 2
        </Item>
      </SnapItem>
      <SnapItem margin={{ top: '15px', bottom: '15px' }} height="60%" snapAlign="center">
        <Item onClick={() => goToChildren(3)} visible={visible === 3}>
          Item 3
        </Item>
      </SnapItem>
      <SnapItem margin={{ top: '15px', bottom: '20%' }} height="60%" snapAlign="center">
        <Item onClick={() => goToChildren(4)} visible={visible === 4}>
          Item 4
        </Item>
      </SnapItem>
    </SnapList>
  );
};
