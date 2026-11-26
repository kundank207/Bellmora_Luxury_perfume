import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-8 max-w-2xl mx-auto my-12 bg-white rounded-3xl border border-red-200 shadow-xl text-left">
          <h2 className="text-xl font-serif font-bold text-red-600 mb-2">Application Initialization Notice</h2>
          <p className="text-xs text-aura-grey mb-4">An error occurred during component rendering:</p>
          <div className="p-4 bg-red-50 text-red-800 rounded-xl text-xs font-mono overflow-x-auto mb-4 border border-red-100">
            <strong>{this.state.error?.name}: </strong>
            {this.state.error?.message}
          </div>
          {this.state.error?.stack && (
            <pre className="p-3 bg-gray-50 text-[11px] text-gray-700 rounded-xl overflow-x-auto max-h-48">
              {this.state.error.stack}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-aura-espresso text-white rounded-xl text-xs font-semibold"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
