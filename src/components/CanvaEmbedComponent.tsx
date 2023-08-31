import React from 'react';

interface CanvaEmbedProps {
  url: string;
}

const CanvaEmbedComponent: React.FC<CanvaEmbedProps> = ({ url }) => (
  <div>
    <div
      style={{
        position: 'relative',
        height: '35vw',
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        margin: '8vw',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform'
      }}
    >
      <iframe
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          border: 'none',
          padding: '0',
          margin: '0'
        }}
        src={url}
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>
  </div>
);

export default CanvaEmbedComponent;
