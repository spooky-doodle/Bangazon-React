import React, { useState, useEffect } from "react";
import { Customers } from "../../modules/Endpoints";
import { Container, Header, Image, Table } from "semantic-ui-react";
import SamplePicture from "./benjamin-parker-OhKElOkQ3RE-unsplash.jpg";


export const CustomerDetail = (props) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    Customers.getOne(`${props.id}?_include=products`).then((customer) => setCustomer(customer));
  }, [props.id])

  console.log(customer);

  if (!customer) return <> </>;

  return (<Container text style={{marginTop: '2rem'}}> 
    <Header as="h2" content={`${customer.firstName} ${customer.lastName}`} style={{marginBottom: '2rem'}}/>
    <Table>

    <Table.Row>
      <Table.Cell>
        <Image size="medium" src={SamplePicture}/>
      </Table.Cell>

      <Table.Cell>
        
      </Table.Cell>
    </Table.Row>
    </Table>
  </Container>);


}


// <a href="https://unsplash.com/@brokenlenscap?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" 
// title="Benjamin Parker"></a>