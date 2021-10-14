import React, { Component } from "react";
import "../css/rapor1.css";

export default class DataTable extends Component {
    render() {
        return (
            <div className="Datatablee">
                <table id="example" class="display">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>{this.props.title}</th>
                            <th>{this.props.title2}</th>
                            <th>Durum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mahal Tip 1</td>
                            <td>mahaltip1</td>
                            <td>Aktif</td>
                        </tr>
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Mahal Tipi Adı</th>
                            <th>Mahal Tipi Kodu</th>
                            <th>Durum</th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>
        );
    }
}
