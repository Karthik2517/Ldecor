import '../styles/Contact.css';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaSearchLocation 
} from 'react-icons/fa';

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  },
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/ThoranamDecors/" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/thoranamdecors/" },
  { icon: <FaWhatsapp />, href: "#" }
];

const CONTACT_INFO = [
  { icon: <FaPhoneAlt className="icon" />, text: "+1(484)302-9331 / +1(732)912-8810" },
  { icon: <FaEnvelope className="icon" />, text: "info@lotusdecorandevents.com" },
  { icon: <FaSearchLocation className="icon" />, text: "14800 Quorum Dr, Suite # 269, Dallas, Tx 75254" }
];

const Contact = memo(() => {
  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="contact-title"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
      >
        Get in Touch
        <motion.span 
          className="title-underline"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </motion.h2>

      <motion.div 
        className="contact-container"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
        layout
      >
        {/* Left Column */}
        <div className="contact-left-column">
          {/* Contact Details */}
          <motion.div 
            className="contact-card"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ 
              y: -4,
              boxShadow: "0 12px 24px rgba(0,0,0,0.1)"
            }}
          >
            <motion.h3>Contact Details</motion.h3>
            <div className="contact-info">
              {CONTACT_INFO.map((info, index) => (
                <motion.p 
                  key={index}
                  whileTap={{ scale: 0.98 }}
                >
                  {info.icon} {info.text}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              className="social-links"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Inquiry Button */}
          <motion.div 
            className="inquiry-button-card"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ scale: 1.01 }}
          >
            <h3>Have a Custom Request?</h3>
            <div className="inquiry-btn-wrapper">
  <a 
    href="https://forms.gle/your-form-link" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="contactshine-btn inquiry-btn"
  >
    Submit Your Inquiry
  </a>
</div>

          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div 
          className="form-card"
          variants={ANIMATION_VARIANTS.item}
          animate={ANIMATION_VARIANTS.floating}
          whileHover={{ y: -3 }}
        >
          <form className="contact-form">
            {['Name', 'Email', 'Message'].map((field) => (
              <motion.div 
                key={field}
                className="form-group"
                whileTap={{ scale: 0.98 }}
              >
                <label>{field}</label>
                {field === 'Message' ? (
                  <textarea rows="4" placeholder="Tell us more..." required />
                ) : (
                  <input 
                    type={field === 'Email' ? 'email' : 'text'} 
                    placeholder={field === 'Email' ? 'you@example.com' : 'Your Name'} 
                    required 
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="contactshine-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default Contact;
