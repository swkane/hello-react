import React, { Component } from 'react';

const Text = ({ color, children }) => {
    return (
            <span style={{ 'color': color }}>{children}</span>
    );
}

export default Text;