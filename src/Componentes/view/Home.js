import React from 'react';
import { Sidebar } from "../Sidebar";
import { Grid } from "../Grid";


export const Home = () => {
    return (
        <div>
            <div className="row">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div>
                    <Grid></Grid>
                </div>
            </div>
        </div>
    );
}
