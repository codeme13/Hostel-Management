import React, {Component} from 'react';
import DashBoard from './DashboardComponent'; 
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import LeftNav from './LeftNav';
import Profile from './ProfileComponent'

import EmployeeView from './EmployeeView';
import StudentView from './StudentsComponent';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav/>
                    </div>
                    <div className="col-md-9">
                        
                        <Switch>
                            <Route path="/admin/dashboard" component={DashBoard}/>
                            <Route exact path="/admin/students" component={StudentView}/>
                            <Route exact path="/admin/employees" component={EmployeeView}/>
                            <Route exact path="/admin/rooms" component={DashBoard}/>
                            <Route exact path="/admin/attendance" component={DashBoard}/> 
                            <Route exact path="/admin/MealManage" component={DashBoard}/>
                            <Route exact path="/admin/CostManage" component={DashBoard}/>
                            <Route exact path="/admin/StudentsManage/view" component={StudentView}/>
                            <Route exact path="/admin/StudentsPayment" component={DashBoard}/>
                            <Route exact path="/admin/EmployeeManage/view" component={EmployeeView}/>
                            <Route exact path="/admin/VendorPayment" component={DashBoard}/>
                            <Route exact path="/admin/BillManange" component={DashBoard}/>
                            <Route exact path="/admin/NoticeBoard" component={DashBoard}/>
                            <Route exact path="/admin/Settings" component={Profile}/>
                            <Route exact path="/admin/Setup" component={DashBoard}/>
                            <Redirect to="/admin/dashboard"/>
                        </Switch>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin