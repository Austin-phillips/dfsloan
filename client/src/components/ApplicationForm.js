import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import '../assets/css/main.css'
import { addForm } from '../actions/form'

const marital = [
  { key: 'm', text: 'Married', value: 'Married' },
  { key: 'u', text: 'Unmarried', value: 'Unmarried' },
]

const roo = [
  {key: 'r', text: 'Rent', value: 'Rent'},
  {key: 'o', text: 'Own', value: 'Own'},
]

class ApplicationForm extends Component {
  state = { first: '', last: '', middle: '', email: '', cellphone: '', workphone: '', maritalstatus: '', 
            dob: '', addressone: '', addresstwo: '', city: '', state: '', zipcode: '', yaa: '',
            roo: '', bfirst: '', blast: '', bmiddle: '', bdob: '', modalOpen: false }
            
  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  closeAndClear = (e) => {
    this.setState({
      first: '', last: '', middle: '', email: '', cellphone: '', workphone: '', maritalstatus: '',
      dob: '', addressone: '', addresstwo: '', city: '', state: '', zipcode: '', yaa: '',
      roo: '', bfirst: '', blast: '', bmiddle: '', bdob: ''})
    this.handleClose()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { first, last, middle, email, cellphone, workphone, maritalstatus, dob, bdob,
            addressone, addresstwo, city, state, zipcode, yaa, roo, bfirst, blast, bmiddle,} = this.state;
    dispatch(addForm({ 
      first, last, middle, email, cellphone, workphone, maritalstatus, dob, bdob,
      addressone, addresstwo, city, state, zipcode, yaa, roo, bfirst, blast, bmiddle, }));
    this.closeAndClear()
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<a onClick={this.handleOpen} className="button primary major">Get Started</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
        <div className='applicationForm'>
          <Header textAlign='center'>Borrowers' Information</Header>
          <Segment basic>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='first'
                  autoFocus={true}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Last Name'
                  name='last'
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Middle Name'
                  name='middle'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Email'
                  name='email'
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Cell Phone'
                  name='cellphone'
                  type='number'
                  pattern="\d*"
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Work Phone'
                  name='workphone'
                  type='number'
                  pattern="\d*"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select
                  fluid 
                  required 
                  name='maritalstatus' 
                  label='Marital Status' 
                  options={marital} 
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Date Of Birth'
                  name='dob'
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
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Address 2'
                  name='addresstwo'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='City'
                  name='city'
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='State'
                  name='state'
                  placeholder='Example: Utah'
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Zipcode'
                  name='zipcode'
                  type='number'
                  pattern="\d*"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Years at address'
                  name='yaa'
                  type='number'
                  pattern="\d*"
                  required
                  onChange={this.handleChange}
                />
                <Form.Select 
                  fluid 
                  required
                  label='Rent or Own' 
                  name='roo' 
                  options={roo} 
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Header textAlign='center'>Secondary Borrower</Header>
              <Form.Group widths='equal'>
                <Form.Input
                  label="First Name"
                  name='bfirst'
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Last Name"
                  name='blast'
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Middle Name"
                  name='bmiddle'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Date of Birth"
                  name='bdob'
                  placeholder='MM/DD/YYYY'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button.Group>
                <Button className='formbuttons' color='green' type='submit' >Submit</Button>
                <Button className='formbuttons' color='red' onClick={() => this.closeAndClear()} >Cancel</Button>
              </Button.Group>
            </Form>
          </Segment>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect()(ApplicationForm);