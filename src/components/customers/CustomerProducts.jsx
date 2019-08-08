
import React from 'react';
import {Table} from 'semantic-ui-react';


export const CustomerProducts = ({products}) => {
  console.log(products);

  if (products.length > 0) return (
    <Table columns={2}>
            {products.map(prod => (
              <Table.Row>
                <Table.Cell>
                {prod.title}<br />
                {prod.description}
                </Table.Cell>
                <Table.Cell>
                  ${prod.price}
                </Table.Cell>
              </Table.Row>
            ) )}
            </Table>
  )
  else return null;
}
