import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          color: '#333',
          borderBottom: '2px solid #ee1d52',
          paddingBottom: '10px',
        }}
      >
        New Contact Message from Portfolio
      </h2>

      <div
        style={{
          background: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0',
        }}
      >
        <h3 style={{ color: '#555', marginTop: '0' }}>Contact Details:</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong>
        </p>
        <div
          style={{
            background: 'white',
            padding: '15px',
            borderRadius: '5px',
            borderLeft: '4px solid #ee1d52',
          }}
        >
          {message.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        style={{
          background: '#e8f4fd',
          padding: '15px',
          borderRadius: '5px',
          borderLeft: '4px solid #007acc',
        }}
      >
        <p style={{ margin: '0', color: '#005a8b' }}>
          <strong>Sent from:</strong> Your Portfolio Website
          <br />
          <strong>Time:</strong> {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
