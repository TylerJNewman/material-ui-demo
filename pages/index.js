import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Topbar, Footer, Sidebar } from '../src/layout'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  headerSpacer: {
    width: '100vw',
    height: '9.5vh'
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

  const address = [
    'focaldata',
    '77 East Rd',
    'Hoxton',
    'London',
    'N1 6AH'
  ]

  const socialLinks = [
    {
      href: 'https://facebook.com',
      alt: 'Facebook',
      icon: <FacebookIcon />
    },
    {
      href: 'https://twitter.com',
      alt: 'Twitter',
      icon: <TwitterIcon />
    },
    {
      href: 'https://pinterest.com',
      alt: 'Pinterest',
      icon: <PinterestIcon />
    },
    {
      href: 'https://Instagram.com',
      alt: 'Instagram',
      icon: <InstagramIcon />
    }
  ]

  const copyright = ['© 2019 focaldata. All rights reserved']

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
      <Topbar
        onSidebarOpen={handleSidebarOpen} onSidebarClose={handleSidebarClose} openSidebar={openSidebar}
        pages={pages}
      />
      <div className={classes.headerSpacer} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant='temporary'
        pages={pages}
      />
      <main>
        {children}
      </main>
      <Footer
        pages={pages}
        address={address}
        socialLinks={socialLinks}
        copyright={copyright}
      />
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
