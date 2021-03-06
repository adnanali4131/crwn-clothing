import React from 'react'
import MenuItem from '../menu-item/menu-item.components'
import './directory.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)

// return (
//   <div className="directory-menu">
//     {this.state.sections.map(({ title, imageUrl, id, size }) => (
//       <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
//     ))}
//   </
