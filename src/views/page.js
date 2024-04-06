import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/primary-button'
import BasicPageLayout, { BlogPageLayout } from '../layouts/basic-page'
import DB from '../data/db'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import moment from 'moment'
import './home.css'


const Page = (props) => {

  const [page, setPage] = useState(null);
  const { name } = props.match.params


  useEffect(() => {
    DB.getPageBySlug(name).then((data) => {
      console.log("page", data)
      setPage(data)
    })
  }, [])

  return (
    <BlogPageLayout >
      <div
        style={{ zIndex: 100, width: "100%", maxWidth: 1050, minHeight: 600, }}
      >
        {page && (
          <div style={{ padding: 40 }}>

            <div
              style={{ fontSize: 52, fontWeight: 700, marginTop: 20, }}
            >
              {page.title}
            </div>


            <div
              style={{
                paddingTop: 20,
              }}
              dangerouslySetInnerHTML={{ __html: page.page }}>
            </div>
          </div>
        )}



      </div>

    </BlogPageLayout>
  )
}

export default Page
