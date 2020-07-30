import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Topbar, Footer, Sidebar } from '../src/layout'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  }
}))

const Main = props => {
  const { children } = props

  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  const pages = [
    {
      groupTitle: 'Solution',
      pages: [
        {
          title: 'Research Agencies',
          href: '/research-agencies'
        },
        {
          title: 'Brands',
          href: '/brands'
        },
        {
          title: 'Politics and Advocacy',
          href: '/politics-and-advocacy'
        }
      ]
    },
    {
      groupTitle: 'Products',
      pages: [
        {
          title: 'Overview',
          href: '/overview'
        },
        {
          title: 'MRP',
          href: '/mrp'
        }
      ]
    },
    {
      groupTitle: 'Resource',
      pages: [
        {
          title: 'PROPER Case Study',
          href: '/proper-case-study'
        },
        {
          title: 'Best for Britain Case Study',
          href: '/best-for-britain-case-study'
        },
        {
          title: 'FAQ',
          href: '/faq'
        }
      ]
    },
    {
      groupTitle: 'Company',
      pages: [
        {
          title: 'About',
          href: '/about'
        },
        {
          title: 'Contact',
          href: '/contact'
        },
        {
          title: 'Privacy policy',
          href: '/privacy-policy'
        }
      ]
    },
    {
      groupTitle: 'Demo',
      pages: [
        {
          title: 'Sign Up',
          href: '/signup'
        },
        {
          title: 'Log In',
          href: '/login'
        }
      ]
    }
  ]

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const open = isMd ? false : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} onSidebarClose={handleSidebarClose} openSidebar={openSidebar} pages={pages} />
      <main>
        <Sidebar
          onClose={handleSidebarClose}
          open={open}
          variant='temporary'
          pages={pages}
        />{children}
      </main>
      <Footer pages={pages} />
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
