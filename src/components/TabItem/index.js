// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    selectedTabId(tabId)
  }

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item-container">
      <button className={tabClassName} type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
