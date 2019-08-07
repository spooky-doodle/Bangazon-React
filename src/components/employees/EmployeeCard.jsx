import React, { Component } from 'react'
import {Card, Image} from 'semantic-ui-react'
import dwight from '../../img/Dwight_.jpg'


export default class EmployeeCard extends Component {
    render() {
        console.log(this.props.employee)
        return (
            <Card>
                <Image src={dwight}/>
                <Card.Content style={{ backgroundColor: '' }}>
                    <Card.Header>{this.props.employee.firstName} {this.props.employee.lastName}</Card.Header>
                    <Card.Description>
                        <p>Dept: {this.props.employee.department.name}</p>
                        {(this.props.employee.isSupervisor === true) ?
                        <p>Supervisor</p> : <p>Assistant to the supervisor</p>}
                        <p>Computers:</p>
                        {(!this.props.employee.computers[0]) ? <p>None Assigned</p> : 
                        this.props.employee.computers.map(computer => 
                            <p>{computer.manufacturer} {computer.make}</p>)
                        }
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
