import PropTypes from 'prop-types'
import Sidebar from './Sidebar'

const LayoutDashboard = (props) => {
  return (
    <div className="min-h-screen flex font-sans antialiased relative">
      <div className="w-full absolute z-10 bg-primary h-1/3" />
      <div className="w-full flex items-stretch relative z-20 p-4">
        <Sidebar />
        <div className="w-full ml-5">
          <nav className="w-full flex items-center justify-end p-4 bg-white rounded-md shadow-md">
            <p>LOGOUT</p>
          </nav>
          {props.children}
        </div>
      </div>
    </div>
  )
}

LayoutDashboard.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutDashboard