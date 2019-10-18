import React from 'react';

const Spacer = ({ children }) => {
  return (
    <div style={styles.spacer}>{children}</div>
  );
};

const styles = {
  spacer: {
    marginTop: 7,
    marginBottom: 7
  }
};

export default Spacer;