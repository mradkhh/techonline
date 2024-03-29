import React from "react";

class ErrorBoundary extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {hasError: false }
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log({ error, errorInfo })
    }

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({hasError: false})}
                    >
                        Try again?
                    </button>
                </div>
            )

        }

            return this.props.children
        }

    }

export default ErrorBoundary