import React from 'react'
import "../css/footer.css"

export default function Footer() {
  const date = new Date()

  return (
    <div className="footer">
      <p className="footer__copyright">&copy;{date.getFullYear()} Julian Krüger</p>
    </div>

  )
}
