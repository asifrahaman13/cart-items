import React from 'react'
import { useEffect, useState } from 'react'
import Table from './Table';
import TableComponent from './TableComponent';

const TableContent = () => {
  return (
    <>
    <body>
        <div className="home-container">
          <div className="serv">
            <ul>
              <TableComponent/>
            </ul>
          </div>
        </div>
      </body>
    </>
  )
}

export default TableContent