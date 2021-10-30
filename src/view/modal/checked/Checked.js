import React, { Component } from 'react'

export default class checked extends Component {
    render() {
        return (
            <div>
                <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">Aktif</label>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                </div>
            </div>
        )
    }
}
