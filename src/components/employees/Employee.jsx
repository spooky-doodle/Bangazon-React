import React, { Component } from 'react'
import {Container, Card, Modal, Grid, Icon, Button, Header, Form, Segment, Dropdown} from 'semantic-ui-react'
import {Employees} from '../../modules/Endpoints'
import EmployeeCard from './EmployeeCard'

export default class Employee extends Component {
    state = {
        employees: [],
        firstName: '',
        lastName: '',
        departmentId: 1,
        isSupervisor: true
    }

    async componentDidMount() {
        console.log(await Employees.getAll())
        Employees.getAll()
        .then((employees) => this.setState({employees}))  
    }

    // Handle modal
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    saveNewEmployee = async() => {
        const newEmployee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            departmentId: this.state.departmentId,
            isSupervisor: this.state.isSupervisor
        }
        await Employees.create(newEmployee)
        .then(e => Employees.getAll())
        .then((employees) => this.setState({employees}))

    }

    render() {
        const departmentOptions = [
           {key: '1', text: 'Marketing', value: 1},
           {key: '2', text: 'Sales', value: 2},
           {key: '3', text: 'Acctg', value: 3},
           {key: '4', text: 'BrassTacks', value: 4}
        ]

        const supervisorOptions = [
            {key: '1', text: 'Yes', value: true},
            {key: '2', text: 'No', value: false}
        ]
        // console.log(this.state)
        return (
            <Container style={{marginTop: '20px'}}>
                <Modal trigger={<Button onClick={this.handleOpen} color='black'>Add Employee</Button>}
                        closeIcon
                        open={this.state.modalOpen}
                        onClose={this.handleClose}>
                        <Header content='Add Employee' />
                        <Modal.Content className='modal-body'>
                            <Grid textAlign='center' style={{ fontSize: 40 }}  >
                                <Grid.Column style={{ maxWidth: 480 }}>
                                    <Form size='large' >
                                        <Segment className='modal-segment' color='black' inverted>
                                            <Form.Input type='text' fluid icon='' iconPosition='left'
                                                placeholder='First Name'
                                                                                               
                                                onChange={(e) => this.setState({ firstName: e.target.value })} />
                                                <Form.Input type='text' fluid icon='' iconPosition='left'
                                                placeholder='Last Name'
                                                                                              
                                                onChange={(e) => this.setState({ lastName: e.target.value })} />
                                            <Dropdown
                                                fluid
                                                placeholder='Department'
                                                selection
                                                options={departmentOptions}
                                                onChange={(e, { value }) => this.setState(
                                                    { departmentId: value })
                                                }
                                            >
                                            </Dropdown>
                                            <Dropdown
                                                fluid
                                                placeholder='Is Supervisor?'
                                                selection
                                                options={supervisorOptions}
                                                onChange={(e, { value }) => this.setState(
                                                    { isSupervisor: value })
                                                }
                                                style={{marginTop: 8}}
                                            >
                                            </Dropdown>
                                        </Segment>
                                    </Form>
                                </Grid.Column>
                            </Grid>
                        </Modal.Content>
                        <Modal.Actions className='modal-header'>
                            <Button className='modal-button' color='red' onClick={this.handleClose}>
                                <Icon name='remove' /> Cancel
                                    </Button>
                            <Button className='modal-button' color='green'
                                onClick={() => {
                                    this.handleClose()
                                    this.saveNewEmployee()
                                }}
                            >
                                <Icon name='checkmark' /> Save
                                    </Button>
                        </Modal.Actions>
                    </Modal>
                <Card.Group style={{marginTop: '10px'}}>
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
