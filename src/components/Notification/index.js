import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="container">
      {children}
      <div>
        <GrFormClose />
      </div>
    </div>
  )
}
export default Notification
