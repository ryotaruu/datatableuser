import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "./Table.css"
export class DataTableBasicDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
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
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2"/>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning"/>
            </React.Fragment>
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
                            <Column field="address.geo.lng" header="Address Geo Lat"></Column>
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
                 