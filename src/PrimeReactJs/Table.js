import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "./Table.css";
import { Dialog } from 'primereact/dialog';
import { Chips } from 'primereact/chips';
import 'primeicons/primeicons.css';
import axios from 'axios';
export class DataTableBasicDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            displayBasic: false,
            id: null,
            username: '',
            name: '',
            email: '',
            address: {
                street: '',
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    products: json
                });
            })
    }
    actionBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" />
            </React.Fragment>
        );
    }
    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };
        if (position) {
            state = {
                ...state,
                position
            }
        }
        this.setState(state);
    }
    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }
    handleSubmit = event => {
        event.preventDefault();
            const post = {
                username: this.state.username,
                name: this.state.name,
                email: this.state.email,
                address:{
                    street: this.state.address.street,
                    suite: this.state.address.suite,
                    city: this.state.address.city,
                    zipcode: this.state.address.zipcode,
                    geo: {
                        lat: this.state.address.geo.lat,
                        lng: this.state.address.geo.lng,
                    }
                },
                phone: this.state.phone,
                website: this.state.website,
                company: {
                    name: this.state.company.name,
                    catchPhrase: this.state.company.catchPhrase,
                    bs: this.state.company.bs
                }
            };
            axios.post(`https://jsonplaceholder.typicode.com/users`,{post})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
    renderFooter(name) {
        return (
            <div>
                <Button label="Canel" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-text" />
                <Button label="Create" icon="pi pi-check" onSubmit={this.handleSubmit} type='submit' autoFocus />
            </div>
        );
    }
    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    }
    render() {
        const header = (
            <div className="table-header">
                <h3 className="mx-0 my-1">Data Table User</h3>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" placeholder="Search..." />
                </span>
            </div>
        );
        return (
            <div>
                <div>
                    <Button onClick={() => this.onClick('displayBasic')}><i className="pi pi-user-plus" style={{ marginRight: "10px" }}></i>Create Data</Button>
                    <Dialog header="Create Data" visible={this.state.displayBasic} style={{ width: '50vw' }} onHide={() => this.onHide('displayBasic')}>
                        <div className=' p-fluid'>
                            <h5>User Name</h5>
                            <Chips onChange={(e) => this.setState({username: e.target.value})}/>
                            <h5>Name</h5>
                            <Chips onChange={(e) => this.setState({name: e.target.value})}/>
                            <h5>Email</h5>
                            <Chips onChange={(e) => this.setState({email: e.target.value})}/>
                            <h5>Address Street</h5>
                            <Chips onChange={(e) => this.setState({address:{street: e.target.value}})}/>
                            <h5>Address Suite</h5>
                            <Chips onChange={(e) => this.setState({address:{suite: e.target.value}})}/>
                            <h5>Address City</h5>
                            <Chips onChange={(e) => this.setState({address:{city: e.target.value}})}/>
                            <h5>Address Zipcode</h5>
                            <Chips onChange={(e) => this.setState({address:{zipcode: e.target.value}})}/>
                            <h5>Address Geo Lat</h5>
                            <Chips onChange={(e) => this.setState({address:{geo:{lat: e.target.value}}})}/>
                            <h5>Address Geo Lng</h5>
                            <Chips onChange={(e) => this.setState({address:{geo:{lng: e.target.value}}})}/>
                            <h5>Phone</h5>
                            <Chips onChange={(e) => this.setState({phone: e.target.value})}/>
                            <h5>Website</h5>
                            <Chips onChange={(e) => this.setState({website: e.target.value})}/>
                            <h5>Company Name</h5>
                            <Chips onChange={(e) => this.setState({company:{name: e.target.value}})}/>
                            <h5>Company Catch Phrase</h5>
                            <Chips onChange={(e) => this.setState({company:{catchPhrase: e.target.value}})}/>
                            <h5>Company Bs</h5>
                            <Chips onChange={(e) => this.setState({company:{bs: e.target.value}})}/>
                        </div>
                        <Button label="Canel" icon="pi pi-times" onClick={() => this.onHide('displayBasic')} className="p-button-text" />
                        <Button label="Create" icon="pi pi-check" onClick={() => this.postData()} type='submit' autoFocus />
                    </Dialog>
                </div>
                <div className="datatable-crud-demo">
                    <div className='card'>
                        <DataTable value={this.state.products} responsiveLayout="scroll" dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" header={header}>
                            <Column field="id" header="Code"></Column>
                            <Column field="username" header="User Name"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="email" header="Email"></Column>
                            <Column field="address.street" header="Address Street"></Column>
                            <Column field="address.suite" header="Address Suite"></Column>
                            <Column field="address.city" header="Address City"></Column>
                            <Column field="address.zipcode" header="Address Zipcode"></Column>
                            <Column field="address.geo.lat" header="Address Geo Lat"></Column>
                            <Column field="address.geo.lng" header="Address Geo Lng"></Column>
                            <Column field="phone" header="Phone"></Column>
                            <Column field="website" header="Website"></Column>
                            <Column field="company.name" header="Company Name"></Column>
                            <Column field="company.catchPhrase" header="Company Catch Phrase"></Column>
                            <Column field="company.bs" header="Company Bs"></Column>
                            <Column header="Options" body={this.actionBodyTemplate}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}
