import React, { useState, useEffect } from "react";
import { Customers } from "../../modules/Endpoints";


export const CustomerDetail = (props) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    Customers.getOne(props.id).then((customer) => setCustomer(customer));
  }, [])

  console.log(customer);

  return <> </>;

}