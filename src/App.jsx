import './App.css'

function App() {
  return (
    <div className="layout-container">
      <header className="header">
        Sean Aethan Kleine T. Nunag - WMD3A
      </header>

      <div className="middle-section">
        <aside className="left-column">
          <div className="hero">Hero</div>
          <div className="sidebar">Sidebar</div>
        </aside>

        <main className="right-column">
          <div className="main-content">
            <h2>Main Content</h2>
          </div>
          <div className="extra-content">Extra Content</div>
        </main>
      </div>

      <div className="bottom-section">
        <div className="related-images">Related Images</div>
        <div className="related-posts">Related Posts</div>
      </div>

      <footer className="footer">Footer</footer>
    </div>
  )
}

export default App