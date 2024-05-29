import React from 'react';

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Review Request Status</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Approved</td>
            <td>Apple</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rejected</td>
            <td>Orange</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Approved</td>
            <td>Banana</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
