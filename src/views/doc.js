import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/primary-button'
import BasicPageLayout, { BlogPageLayout } from '../layouts/basic-page'
import DB from '../data/db'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import moment from 'moment'

const Doc = (props) => {

  const [doc, setDoc] = useState(null);
  const { name } = props.match.params


  useEffect(() => {
    DB.getDocBySlug(name).then((data) => {
      console.log("doc", data)
      setDoc(data)
    })
  }, [])

  return (
    <BlogPageLayout >
      <div
        style={{ zIndex: 100, width: "100%", maxWidth: 1050, minHeight: 600, }}
      >
        {doc && (
          <div style={{ padding: 40 }}>
            <div
              style={{ fontSize: 52, fontWeight: 700, marginTop: 20, }}
            >
              {doc.title}
            </div>
            <div>
              <ReactMarkdown children={doc.body} />
            </div>
          </div>
        )}



      </div>

    </BlogPageLayout>
  )
}

export default Doc
