import React, { Component } from "react";
import MapboxGL from 'mapbox-gl';
export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            api_url: 'https://data.edmonton.ca/resource/87ck-293k.json',
            map: false,
            viewport:  {
            zoom: 10,
            center: [ -113.4909, 53.5444 ]
            },
            data: null
        }
    }

    createFeatureCollection(data) {

    }

    componentDidMount() {
        const {data, api_url} = this.state;

        if (!data) {
            fetch(api_url, {method: 'GET' })
            .then(res => res.json())
            .then(res => this.createFeatureCollection(res))
            .then(res => console.log(res))
        }
    }

    initializeMap() {
        MapboxGL.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        let map = new MapboxGL.Map({
           container: "map",
           style: 'mapbox://styles/mapbox/light-v9',
           ...this.state.viewport
        })

        this.setState({ map });
    }

    render() {
        const { data, map } = this.state;

        if (data && !map) this.initializeMap();

        return (
            <div style={{width:1100, height: 600}} id="map"></div>
        );
    }
}