const linksSocialMedia = {
  github: 'jefersoniw',
  youtube: 'user/jefersoniw/',
  instagram: 'jefersoniw',
  facebook: 'jeferson',
  twitter: 'jefersoniw'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('id')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
