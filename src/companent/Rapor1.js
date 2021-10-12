import React, { Component } from 'react'
import '../css/rapor1.css'
import DataTable from './DataTable'

export default class Table2 extends Component {
    render() {
        return (
            <div>
                <div class="container margin40">
                    <div class="row">
                        <div class="col">
                            <p>İstatistikler</p>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h6> <span class="badge badge-primary">21/10/2021</span> Günlük</h6>
                                    <hr></hr>
                                    <div class="row">
                                        <h1 class="left">0</h1>
                                    </div>

                                    <div class="row">
                                        <p class="left">Tamamlanan Denetim</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <h6> <span class="badge badge-success">Saturday</span>Haftalık</h6>
                                    <hr></hr>
                                    <div class="row">
                                        <h1 class="left">0</h1>
                                    </div>

                                    <div class="row">
                                        <p class="left">Tamamlanan Denetim</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h6> <span class="badge badge-green">10</span>Aylık</h6>
                                    <hr></hr>
                                    <div class="row ">
                                        <h1 class="left">0</h1>
                                    </div>

                                    <div class="row ">
                                        <p class="left">Tamamlanan Denetim</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <h6> <span class="badge badge-red">2021</span>Yıllık</h6>
                                    <hr></hr>
                                    <div class="row ">
                                        <h1 class="left">0</h1>
                                    </div>

                                    <div class="row  ">
                                        <p class="left">Tamamlanan Denetim</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                <DataTable></DataTable>
                </div>
            </div>
        )
    }
}
