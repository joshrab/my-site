import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ 
      borderBottom: '1px solid #eee',
      padding: '20px 0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#333'
          }}>
            Your Name
          </Link>
        </h1>
        <nav>
          <Link to="/about" style={{ marginRight: '20px', color: '#666' }}>About Me</Link>
          <Link to="/cv" style={{ marginRight: '20px', color: '#666' }}>CV</Link>
          <Link to="/blog" style={{ color: '#666' }}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}