import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// This component is used to catch errors in the child components 
// and display a fallback UI. It uses the getDerivedStateFromError 
// lifecycle method to update the state when an error occurs. The render 
// method checks if there is an error and displays a message if there is one, otherwise it renders the child components.
// It is used in the index.jsx file to wrap the main App component, 
// so any errors in the app will be caught and displayed. This helps 
// to prevent the entire app from crashing due to an error in a single component.