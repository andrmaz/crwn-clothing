import React, { Component } from 'react';

import { 
    ErrorImageOverlay, 
    ErrorImageContainer, 
    ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError() {
        // process the error
        return { hasErrored: true }; 
    };

    componentDidCatch(error, infor) {
        console.log(error)
    };

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/kZNTPqI.png'/>
                    <ErrorImageText> 
                        This Page Contains Nothing but Scraps
                    </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
        
    }
    
};

export default ErrorBoundary;