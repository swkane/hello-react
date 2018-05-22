import React, { Component } from 'react';

const Text = ({ color, value }) => {
    return (
            <span style={{ 'color': color }}>{value}</span>
    );
}

export default Text;