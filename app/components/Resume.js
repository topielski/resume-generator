import React, { PropTypes } from 'react'
import Loading from './Loading'
import { uploaded_resume_url, resume_bucket_url } from '../config/Globals'
import { transparentBg, resumeStyle } from '../styles'

function Resume ({ isLoading, resumeHashId }) {
  return isLoading ?
  (
    <div style={{textAlign: 'center', marginTop: '3em', height: '10%'}}>
      <i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
    </div>
  ) :
  (
    <div style={ resumeStyle }>
      <embed src={resume_bucket_url + `/${resumeHashId}/resume.pdf`} width="100%" height="100%" />
    </div>
  )
}

Resume.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  resumeHashId: PropTypes.string.isRequired
}

export default Resume