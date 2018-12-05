import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import '../assets/css/main.css'
import { updateForm } from '../actions/form'

const maritalOptions = [
  { key: 'm', text: 'Married', value: 'Married' },
  { key: 'u', text: 'Unmarried', value: 'Unmarried' },
]

const rooOptions = [
  { key: 'r', text: 'Rent', value: 'Rent' },
  { key: 'o', text: 'Own', value: 'Own' },
]

const statusOptions = [
  { key: 'n', text: 'New', value: 'New' },
  { key: 'f', text: 'Follow-Up', value: 'Follow-Up' },
  { key: 'c', text: 'Closed', value: 'Closed' },
]

class EditForm extends Component {
  state = {
    first: this.props.lead.first, last: this.props.lead.last, middle: this.props.lead.middle,
    email: this.props.lead.email, cellphone: this.props.lead.cellphone, workphone: this.props.lead.workphone,
    maritalstatus: this.props.lead.maritalstatus, dob: this.props.lead.dob, addressone: this.props.lead.addressone,
    addresstwo: this.props.lead.addresstwo, city: this.props.lead.city, state: this.props.lead.state,
    zipcode: this.props.lead.zipcode, yaa: this.props.lead.yaa, roo: this.props.lead.roo,
    bfirst: this.props.lead.bfirst, blast: this.props.lead.blast, bmiddle: this.props.lead.bmiddle,
    bdob: this.props.lead.bdob, status: this.props.lead.status, note: this.props.lead.note,
    exnote: this.props.lead.exnote, modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { first, last, middle, email, cellphone, workphone, maritalstatus, dob, bdob,
      addressone, addresstwo, city, state, zipcode, yaa, roo, bfirst, blast, bmiddle, status, note, exnote } = this.state;
    dispatch(updateForm({
      first, last, middle, email, cellphone, workphone, maritalstatus, dob, bdob,
      addressone, addresstwo, city, state, zipcode, yaa, roo, bfirst, blast, bmiddle, status, note, exnote},
      this.props.lead.id, this.props.history))
    this.handleClose()
  }

  render() {
    const { first, last, middle, email, cellphone, workphone, maritalstatus, dob, bdob,
      addressone, addresstwo, city, state, zipcode, yaa, roo, bfirst, blast, bmiddle, status, note, exnote } = this.state;
    return (
      <div>
        <Modal
          trigger={<Button className='LeadButton' icon='edit' color='green' size='mini' onClick={this.handleOpen}></Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Header textAlign='center'>Borrowers' Information</Header>
          <Segment basic>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='first'
                  defaultValue={first}
                  autoFocus={true}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Last Name'
                  name='last'
                  defaultValue={last}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Middle Name'
                  name='middle'
                  defaultValue={middle}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Email'
                  name='email'
                  defaultValue={email}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Cell Phone'
                  name='cellphone'
                  defaultValue={cellphone}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Work Phone'
                  name='workphone'
                  defaultValue={workphone}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select
                  fluid
                  required
                  name='maritalstatus'
                  defaultValue={maritalstatus}
                  label='Marital Status'
                  options={maritalOptions}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Date Of Birth'
                  name='dob'
                  defaultValue={dob}
                  placeholder='MM/DD/YYYY'
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Header textAlign='center'>Current Address</Header>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Address 1'
                  name='addressone'
                  defaultValue={addressone}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Address 2'
                  name='addresstwo'
                  defaultValue={addresstwo}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='City'
                  name='city'
                  defaultValue={city}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='State'
                  name='state'
                  defaultValue={state}
                  placeholder='Example: Utah'
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Zipcode'
                  name='zipcode'
                  defaultValue={zipcode}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Years at address'
                  name='yaa'
                  defaultValue={yaa}
                  type='number'
                  pattern="\d*"
                  required
                  onChange={this.handleChange}
                />
                <Form.Select
                  fluid
                  required
                  label='Rent Or Own'
                  name='roo'
                  defaultValue={roo}
                  options={rooOptions}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Header textAlign='center'>Secondary Borrower</Header>
              <Form.Group widths='equal'>
                <Form.Input
                  label="First Name"
                  name='bfirst'
                  defaultValue={bfirst}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Last Name"
                  name='blast'
                  defaultValue={blast}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Middle Name"
                  name='bmiddle'
                  defaultValue={bmiddle}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Date of Birth"
                  name='bdob'
                  defaultValue={bdob}
                  placeholder='MM/DD/YYYY'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Small Note"
                  name='note'
                  defaultValue={note}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.TextArea
                  label="Extended Note"
                  name='exnote'
                  defaultValue={exnote}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select
                  fluid
                  required
                  label='Status'
                  name='status'
                  defaultValue={status}
                  options={statusOptions}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button.Group>
                <Button className='formbuttons' color='green' type='submit' >Save</Button>
                <Button className='formbuttons' color='red' onClick={() => this.handleClose()} >Cancel</Button>
              </Button.Group>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}

export default connect()(EditForm);