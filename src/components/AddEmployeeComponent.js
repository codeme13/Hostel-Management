import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback} from 'reactstrap';

class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            mobile: '',
            gender: '',
            type: '',
            address: '',
            designation: '',
            salary: '',
            joinDate: '',
            photo: '',
            touched: {
                name: false,
                mobile: false,
                gender: false,
                type: false,
                address: false,
                designation: false,
                salary: false
            }
        }
    }

    handleSubmit = (event) => {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate = (name, mobile, gender, type, address, designation, salary) => {
        const errors = {
            name: '',
            email: '',
            mobile: '',
            message: '',
            gender: '',
            type: '',
            address: '',
            designation: '',
            salary: ''
        }
        const reg = /^\d{10}$/;
        if(this.state.touched.mobile && !reg.test(mobile)) 
            errors.mobile = 'Enter a valid Mobile Number';
        if(this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if(this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if(this.state.touched.type && type.length < 3) 
            errors.type = 'Employee type should contain a minimum of 3 characters';
        if(this.state.touched.gender && gender.length < 3) 
            errors.gender = 'Please select the gender';
        if(this.state.touched.address && address.length < 20) 
            errors.address = 'Address should contain a minimum of 20 characters';
        if(this.state.touched.designation && designation.length < 3) 
            errors.designation = 'Designation should contain a minimum of 3 characters';
        if(this.state.touched.salary && salary.length === 0) 
            errors.salary = 'Enter the salary';

        return errors;
        
    }

    render(){
        const errors = this.validate(this.state.name, this.state.mobile,
            this.state.gender,this.state.type,this.state.address, this.state.designation, this.state.salary)
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add New Employee</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input type="text" name="name" id="name" value={this.state.name} placeholder="Name"
                                    onBlur={this.handleBlur('name')} onChange={this.handleInputChange}
                                    valid={errors.name === ''} invalid={errors.name !== ''}/>
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                <FormGroup>
                                        <Label for="gender">Gender</Label>
                                        <Input type="select" name="gender" id="gender" value={this.state.gender} className="form-control"
                                        onBlur={this.handleBlur('gender')} onChange={this.handleInputChange} 
                                        valid={errors.gender === ''} invalid={errors.gender !== ''}>
                                            <option defaultValue>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Input>  
                                        <FormFeedback>{errors.gender}</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="type">Employee Type</Label>
                                    <Input type="text" name="type" id="type" value={this.state.type} placeholder="Employee Type"
                                    onBlur={this.handleBlur('type')} onChange={this.handleInputChange} 
                                    valid={errors.type === ''} invalid={errors.type !== ''}/>
                                    <FormFeedback>{errors.type}</FormFeedback>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="designation">Designation</Label>
                                    <Input type="text" name="designation" value={this.state.designation} id="designation"
                                    onBlur={this.handleBlur('designation')} onChange={this.handleInputChange} 
                                    valid={errors.name === ''} invalid={errors.name !== ''}  placeholder="Designation"/>
                                    <FormFeedback>{errors.designation}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="joinDate">Joining Date</Label>
                                        <Input type="date" name="joinDate" value={this.state.joinDate} 
                                        onChange={this.handleInputChange} id="joiningdate" placeholder="Joining Date"/>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input type="textarea" name="address" value={this.state.address} id="address" 
                                    onBlur={this.handleBlur('address')} onChange={this.handleInputChange} placeholder="Address" 
                                    valid={errors.address === ''} invalid={errors.address !== ''} rows="1" />
                                    <FormFeedback>{errors.address}</FormFeedback>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="salary">Salary</Label>
                                    <Input type="text" name="salary" id="salary" value={this.state.salary} 
                                    onBlur={this.handleBlur('salary')} onChange={this.handleInputChange} placeholder="Salary" 
                                    valid={errors.salary === ''} invalid={errors.salary !== ''}
                                    rows="1" />
                                    <FormFeedback>{errors.salary}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input type="text" name="mobile" id="mobile" value={this.state.mobile} 
                                    onBlur={this.handleBlur('mobile')} onChange={this.handleInputChange} 
                                    valid={errors.mobile === ''} invalid={errors.mobile !== ''} placeholder="Mobile No." />
                                    <FormFeedback>{errors.mobile}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="photo">Photo</Label>
                                        <Input type="file" name="photo" value={this.state.photo} 
                                        onChange={this.handleInputChange} id="photo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Save
                                    </Button> 
                                </Col>
                            </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default AddEmployee;