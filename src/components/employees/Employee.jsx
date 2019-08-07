import React, { Component } from 'react'
import {Container, Card} from 'semantic-ui-react'
import {Employees} from '../../modules/Endpoints'
import EmployeeCard from './EmployeeCard'

export default class Employee extends Component {
    state = {
        employees: []
    }

    async componentDidMount() {
        console.log(await Employees.getAll())
        Employees.getAll()
        .then((employees) => this.setState({employees}))  
    }

    render() {
        console.log(this.state.employees)
        return (
            <Container>
                <Card.Group style={{marginTop: '20px'}}>
                {
                        this.state.employees.map(employee => {
                            return <EmployeeCard key={employee.id} employee={employee}></EmployeeCard>
                        })
                    }
                </Card.Group>
            </Container>
        )
    }
}
