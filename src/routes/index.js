
import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      first page
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
