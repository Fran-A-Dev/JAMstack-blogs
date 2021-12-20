
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Fran_The_Dev</span>
              <span>JAMstack Blogs + Videos</span>
            </h1>
            <h2>JAMstack Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Fran_The_Dev</p>
      </footer>
    </div>
  )
}

