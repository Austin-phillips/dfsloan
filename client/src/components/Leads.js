import React, { Component } from 'react';
import { Header, Button, Segment, Table, Icon, Confirm } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getForms, deleteForm} from '../actions/form'
import EditForm from './EditForm'
import '../assets/css/main.css'

const status = ['New', 'Follow-Up', 'Closed', ]

class Leads extends Component {

  componentDidMount() {
    this.props.dispatch(getForms())
  }

  deleteLead = (id) => {
    const deleted = window.confirm('Are you sure you want to delete?')
    if (deleted)
      this.props.dispatch(deleteForm(id))
  }

  newLeads = () => {
    const {leads} = this.props
    return leads.map(l => {
      if(l.status == "New")
      return(
        <Table.Row key={l.id}>
          <Table.Cell>{l.first} {l.last}</Table.Cell>
          <Table.Cell>{l.email}</Table.Cell>
          <Table.Cell>{l.cellphone}</Table.Cell>
          <Table.Cell>{l.note}</Table.Cell>
          <Table.Cell>
            <Button.Group>
              <Button className='LeadButton' icon='address book' color='blue' size='mini'></Button>
              <EditForm lead={l} />
              <Button className='LeadButton' icon='trash' color='red' size='mini' onClick={() => this.deleteLead(l.id)}></Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      )
    })
  }
  followLeads = () => {
    const {leads} = this.props
    return leads.map(l => {
      if(l.status == "Follow-Up")
      return(
        <Table.Row key={l.id}>
          <Table.Cell>{l.first} {l.last}</Table.Cell>
          <Table.Cell>{l.email}</Table.Cell>
          <Table.Cell>{l.cellphone}</Table.Cell>
          <Table.Cell>{l.note}</Table.Cell>
          <Table.Cell>
            <Button.Group>
              <Button className='LeadButton' icon='address book' color='blue' size='mini'></Button>
              <EditForm lead={l} />
              <Button className='LeadButton' icon='trash' color='red' size='mini' onClick={() => this.deleteLead(l.id)}></Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      )
    })
  }
  closedLeads = () => {
    const {leads} = this.props
    return leads.map(l => {
      if(l.status == "Closed")
      return(
        <Table.Row key={l.id}>
          <Table.Cell>{l.first} {l.last}</Table.Cell>
          <Table.Cell>{l.email}</Table.Cell>
          <Table.Cell>{l.cellphone}</Table.Cell>
          <Table.Cell>{l.note}</Table.Cell>
          <Table.Cell>
            <Button.Group>
              <Button className='LeadButton' icon='address book' color='blue' size='mini'></Button>
              <EditForm lead={l} />
              <Button className='LeadButton' icon='trash' color='red' size='mini' onClick={() => this.deleteLead(l.id)}></Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    return (
      <div>
        <Segment className='LeadMenuButtons' basic>
          <Link to='/'><a className='button'>Home</a></Link>
          {status.map(s => (
            <a key={s} href={`#${s}`} className='button'>{s}</a>
          ))}
        </Segment>
        <Segment basic id='New'>
          <Header textAlign='center'>New Leads</Header>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Cell Phone</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.newLeads()}
            </Table.Body>
          </Table>
        </Segment>
        <Segment basic id='Follow-Up'>
          <Header textAlign='center'>Follow-Up</Header>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Cell Phone</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.followLeads()}
            </Table.Body>
          </Table>
        </Segment>
        <Segment basic id='Closed'>
          <Header textAlign='center'>Closed Leads</Header>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Cell Phone</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.closedLeads()}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { leads: state.form }
}

export default withRouter(connect(mapStateToProps)(Leads));
