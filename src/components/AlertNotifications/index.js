import './index.css'

import {MdWarning} from 'react-icons/md'

import {MdInfo} from 'react-icons/md'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="title">Alert Notifications</h1>

    <Notification>
      <AiFillCheckCircle className="success" />
      <div>
        <h1 className="success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="error" />
      <div>
        <h1 className="error">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="warning" />
      <div>
        <h1 className="warning">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="info" />
      <div>
        <h1 className="info">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
