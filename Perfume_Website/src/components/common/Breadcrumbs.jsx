import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs">
      <ol className="flex items-center space-x-2 text-aura-grey">
        <li>
          <Link to="/" className="hover:text-aura-gold transition-colors flex items-center">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-aura-beige-dark flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-aura-espresso font-medium truncate max-w-xs">{item.label}</span>
              ) : (
                <Link to={item.href} className="hover:text-aura-gold transition-colors truncate max-w-xs">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
