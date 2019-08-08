import React, {useState, useEffect} from "react";
import { Container, Header, Table, Button } from "semantic-ui-react";
import { Customers } from "../../modules/Endpoints";
import { CustomerProducts } from "./CustomerProducts";


export const CustomerList = (props) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    Customers.getAll("?_include=products").then(customers => setCustomers(customers));
    
  }, []);

  console.log(customers);



  return (
    <Container style={{marginTop: '1rem'}}>
      
    <Header as="h3">Hello from Customers</Header>
    <Table celled> 
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Customer Name</Table.HeaderCell>
          <Table.HeaderCell>Products</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      {customers.map(cust => (
        <Table.Row>
          <Table.Cell>
            {cust.firstName} {cust.lastName}
          </Table.Cell>
          <Table.Cell>
            {cust.products? <CustomerProducts products={cust.products} /> : null}
          </Table.Cell>

          <Table.Cell>
            <Button content="Details" onClick={() => props.history.push(`/customers/${cust.id}`)}/>
          </Table.Cell>
      </Table.Row>

      ))}

    </Table>
    </Container>
  )
}
