import React, { Component } from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import dwight from '../../img/Dwight_.jpg'
import './employee.css'


export default class EmployeeCard extends Component {
    render() {
        return (
            <Card className='card'>
                <Image src={dwight}/>
                <Card.Content style={{ backgroundColor: '' }}>
                    <Card.Header>{this.props.employee.firstName} {this.props.employee.lastName}</Card.Header>
                    <Card.Description>
                        <p>Dept: {this.props.employee.department.name}</p>
                        {(this.props.employee.isSupervisor === true) ?
                        <p>Supervisor</p> : <p>Assistant to the supervisor</p>}
                            <p> {<Icon name='computer'/>} Computers:</p>
                        {(!this.props.employee.computers[0]) ? <p>None Assigned</p> : 
                        this.props.employee.computers.map(computer => 
                            <p key={computer.id}>{computer.manufacturer} {computer.make}</p>)
                        }
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
