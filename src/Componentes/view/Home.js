import React from 'react';
import { Sidebar } from "../Sidebar";
import { Grid } from "../Grid";
import Search from "../Search";

export const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-8">
                    <Grid></Grid>
                </div>
            </div>
        </div>
    );
}
