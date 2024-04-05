import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/primary-button'
import BasicPageLayout, { BlogPageLayout } from '../layouts/basic-page'
import DB from '../data/db'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
            <div style={{
              display: "flex",
            }}>
              <div
                style={{ fontSize: 52, fontWeight: 700, marginTop: 20, flex: 1 }}
              >
                {doc.title}
              </div>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #ccc",
                  fontWeight: 700,
                  fontSize: 12,
                  borderRadius: 5,
                  padding: 10,
                  height: 40,
                  backgroundColor: "#f0f0f0",
                }}
                onClick={() => {
                  window.location.href = `/_doc/${doc.slug}`
                }}
              >
                fullscreen
              </div>
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
