import React, { Component, PropTypes } from 'react';
import { Button, Header, Modal, Segment, Form } from 'semantic-ui-react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class ViewLead extends Component {
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

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }

  render() {
    const { first, last, middle, email, cellphone, workphone, maritalstatus, dob, bdob,
      addressone, addresstwo, city, state, zipcode, yaa, roo, bfirst, blast, bmiddle, status, note, exnote } = this.state;
    return (
      <div>
        <Modal trigger={<Button className='LeadButton' icon='address book' color='blue' size='mini' onClick={this.handleOpen}></Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <div id="divToPrint" className='printDoc'>
            <Header textAlign='center'>Borrowers' Information</Header>
            <Segment basic>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='First Name'
                    value={first}
                  />
                  <Form.Input
                    label='Last Name'
                    value={last}
                  />
                  <Form.Input
                    label='Middle Name'
                    value={middle}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Email'
                    value={email}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Cell Phone'
                    value={cellphone}
                  />
                  <Form.Input
                    label='Work Phone'
                    value={workphone}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Marital Status'
                    value={maritalstatus}
                  />
                  <Form.Input
                    label='Date Of Birth'
                    value={dob}
                  />
                </Form.Group>
                <Header textAlign='center'>Current Address</Header>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Address 1'
                    value={addressone}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Address 2'
                    value={addresstwo}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='City'
                    value={city}
                  />
                  <Form.Input
                    label='State'
                    value={state}
                  />
                  <Form.Input
                    label='Zipcode'
                    value={zipcode}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Years at address'
                    value={yaa}
                  />
                  <Form.Input
                    label='Rent Or Own'
                    value={roo}
                  />
                </Form.Group>
                <Header textAlign='center'>Secondary Borrower</Header>
                <Form.Group widths='equal'>
                  <Form.Input
                    label="First Name"
                    value={bfirst}
                  />
                  <Form.Input
                    label="Last Name"
                    value={blast}
                  />
                  <Form.Input
                    label="Middle Name"
                    value={bmiddle}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label="Date of Birth"
                    value={bdob}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label="Small Note"
                    value={note}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.TextArea
                    label="Extended Note"
                    value={exnote}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Status'
                    value={status}
                  />
                </Form.Group>
              </Form>
            </Segment>
          </div>
          <Segment basic textAlign='center'>
            <Button.Group>
              <Button className='formbuttons' color='green' onClick={() => this.printDocument()}>Download</Button>
              <Button className='formbuttons' color='red' onClick={() => this.handleClose()} >Cancel</Button>
            </Button.Group>
          </Segment>
        </Modal>
      </div>
    );
  }
}

export default ViewLead;
