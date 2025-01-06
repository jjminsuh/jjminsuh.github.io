import * as React from "react"
import { Link } from "gatsby"
import Bio from "./bio"

const Sidebar = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          {title}
        </Link>
      </h1>
    )
  }

  return (
    <div className="sidebar-wrapper">
      <header className="global-header">{header}</header>
      <Bio />
    </div>
  );
}

export default Sidebar