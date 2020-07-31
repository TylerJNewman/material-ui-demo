import React from 'react'
import { Image } from 'components/atoms'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, IconButton, Grid, List, ListItem, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    display: 'flex',
    paddingTop: 120,
    paddingBottom: 120,
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main
  },
  footerContainer: {
    width: '60vw',
    [theme.breakpoints.up('md')]: {
      width: '70vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85vw'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90vw'
    }
  },
  logoContainer: {
    width: 120,
    height: 32,
    marginBottom: 50
  },
  logoImage: {
    height: 20,
    width: 133.5
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1)
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent'
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  menuListContainer: {
    padding: '0 !important'
  },
  menu: {
    display: 'flex'
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0
    }
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white'
  },
  divider: {
    width: '100%'
  },
  navLink: {
    color: 'rgba(255,255,255,.6)'
  },
  anchorElement: {
    color: 'inherit',
    textDecoration: 'inherit'
  },
  anchorText: {
    color: '#fff',
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5
  },
  addressText: {
    color: '#fff',
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 2
  },
  copyrightText: {
    color: '#fff',
    fontSize: 14,
    paddingTop: 50,
    paddingBottom: 5
  }
}))

const PagesLinks = ({ pages }) => {
  const classes = useStyles()

  return (
    <>
      {pages.map(({ title, href }) => (
        <a key={title} href={href} className={classes.anchorElement}>
          <Typography
            variant='body2'
            gutterBottom
            className={classes.anchorText}
          >
            {title}
          </Typography>
        </a>
      ))}
    </>
  )
}

const PagesColumnContent = ({ pagesColumn }) => {
  const { groupTitle, pages } = pagesColumn
  return (
    <>
      <Typography
        component='h4'
        variant='subtitle2'
        gutterBottom
        style={{
          color: '#fff',
          fontSize: 16
        }}
      >
        {groupTitle}
      </Typography>
      <PagesLinks pages={pages} />
    </>
  )
}

const SocialLinkComponent = ({ socialLinks }) => {
  const classes = useStyles()
  return (
    <List disablePadding>
      <ListItem disableGutters>
        {socialLinks.map(link => (
          <IconButton
            key={link.alt}
            className={classes.socialIcon}
            href={link.href}
            alt={link.alt}
            component={Link}
          >
            {link.icon}
          </IconButton>
        ))}
      </ListItem>
    </List>
  )
}

const CopyrightComponent = ({ copyright }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container item xs={12}>
        {copyright.map((line, i) => (
          <Typography
            key={i}
            variant='body2'
            gutterBottom
            className={classes.copyrightText}
          >
            {line}
          </Typography>
        ))}
      </Grid>
    </>
  )
}

const AddressComponent = ({ address }) => {
  const classes = useStyles()
  return (
    <>
      {address.map((line, i) => (
        <Typography
          key={i}
          variant='body2'
          gutterBottom
          className={classes.addressText}
        >
          {line}
        </Typography>
      ))}
    </>
  )
}

const FooterColumn = ({ pagesColumn, address, socialLinks, copyright }) => (
  <Grid item xs={6} sm={3}>
    {pagesColumn &&
      <PagesColumnContent pagesColumn={pagesColumn} />}
    {address &&
      <AddressComponent address={address} />}
    {socialLinks &&
      <SocialLinkComponent socialLinks={socialLinks} />}
  </Grid>
)

const FooterRow = ({ pagesRow, address, socialLinks, copyright }) => (
  <>
    <Grid container item spacing={4} xs={12}>
      {pagesRow?.map((pagesColumn, i) => (
        <FooterColumn
          key={i}
          pagesColumn={pagesColumn}
        />
      ))}
      {address &&
        <FooterColumn address={address} />}
      {socialLinks &&
        <FooterColumn socialLinks={socialLinks} />}
    </Grid>
  </>

)

const Footer = (props) => {
  const { pages, className, address, socialLinks, copyright, ...rest } = props
  const classes = useStyles()
  return (
    <Grid
      container
      justify='center'
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid item className={classes.footerContainer}>
        <Grid container item className={classes.logoContainer}>
          <a href='/' title='logo'>
            <Image
              className={classes.logoImage}
              src='/images/logo-negative.png'
              alt='logo'
              lazy={false}
            />
          </a>
        </Grid>
        <FooterRow pagesRow={pages.slice(0, 4)} />
        <FooterRow
          pagesRow={pages.slice(4, 8)}
          address={address}
          socialLinks={socialLinks}
        />
        <CopyrightComponent
          copyright={copyright}
        />
      </Grid>
    </Grid>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
  address: PropTypes.array.isRequired
}

export default Footer

// <Grid container spacing={4}>
//   <Grid item xs={12} md={2}>
//     <List disablePadding>
//       <ListItem disableGutters className={classes.logoContainerItem}>
//         <div className={classes.logoContainer}>
//           <a href='/' title='thefront'>
//             <Image
//               className={classes.logoImage}
//               src='/images/logo-negative.png'
//               alt='thefront'
//               lazy={false}
//             />
//           </a>
//         </div>
//       </ListItem>
//       <ListItem disableGutters>
//         <IconButton className={classes.socialIcon}>
//           <FacebookIcon className={classes.icon} />
//         </IconButton>
//         <IconButton className={classes.socialIcon}>
//           <InstagramIcon className={classes.icon} />
//         </IconButton>
//         <IconButton className={classes.socialIcon}>
//           <TwitterIcon className={classes.icon} />
//         </IconButton>
//         <IconButton className={classes.socialIcon}>
//           <PinterestIcon className={classes.icon} />
//         </IconButton>
//       </ListItem>
//     </List>
//   </Grid>
//   <Grid item xs={12} md={10} className={classes.menuListContainer}>
//     <Grid container spacing={0}>
//       <Grid item className={classes.listItem} />
//       <Grid item className={classes.listItem} />
//       <Grid item className={classes.listItem} />
//     </Grid>
//   </Grid>
// </Grid>
