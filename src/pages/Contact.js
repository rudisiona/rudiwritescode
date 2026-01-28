import styles from './Contact.module.css';
import gabadge25 from'./gabadge25.png'
function Contact() {
  return (
    <section className={styles.contactBadge}>
      <h1>Rudi (the Coder) Mageo</h1>
      <h2>Los Angeles, CA</h2>
      <ul>
      <li className={styles.iconRow}>
          <a
            href="https://generalassembly.badges.parchment.com/public/assertions/xA2-3RnKTHKu_f6mZVBTHQ?identity__email=rsmageo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gabadge25} alt="General Assemby Basge 2025" />
          </a>
        </li>
        <li><a href="mailto:rsmageo@gmail.com">rsmageo@gmail.com</a></li>
        <li>
          <a href="https://github.com/rudisiona" target="_blank" rel="noreferrer">
            github.com/rudisiona
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rudimageo/" target="_blank" rel="noreferrer">
            linkedin.com/in/rudimageo
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
