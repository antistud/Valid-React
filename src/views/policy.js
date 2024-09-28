import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 9/4/2024
      </p>

      <h2>1. Introduction</h2>
      <p>
        Login.Health ("we," "us," or "our") respects your privacy and is
        committed to protecting your personal health information ("PHI"). This
        Privacy Policy describes how we collect, use, disclose, and safeguard
        your information when you use our services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, job title, employer,
          contact details, and any other data you provide during account
          creation.
        </li>
        <li>
          <strong>Health Information:</strong> Personal health records, medical
          history, and treatment details accessed via our platform.
        </li>
        <li>
          <strong>Technical Information:</strong> Device information, IP
          addresses, browser type, and usage data.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We may use the information collected in the following ways:</p>
      <ul>
        <li>To provide, operate, and maintain our services.</li>
        <li>To improve, personalize, and expand our platform.</li>
        <li>
          To understand and analyze user behavior to enhance user experience.
        </li>
        <li>
          To communicate with you, including support, updates, and
          notifications.
        </li>
      </ul>

      <h2>4. Data Sharing and Disclosure</h2>
      <p>
        We do not sell your personal data to third parties. We may share your
        information:
      </p>
      <ul>
        <li>
          With third-party service providers who assist in delivering our
          services.
        </li>
        <li>As required by law or to comply with legal obligations.</li>
        <li>To protect the security and integrity of our platform.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        Login.Health follows strict data security measures in compliance with
        HIPAA regulations, using industry-standard encryption and access
        controls to protect your information.
      </p>
      <p>
        For more on our encryption practices, please refer to our{" "}
        <a href="#cryptography-policy">Cryptography Policy</a>.
      </p>

      <h2>6. User Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your data and request corrections.</li>
        <li>Request the deletion of your personal data.</li>
        <li>Opt out of data processing in certain situations.</li>
      </ul>

      <h2>7. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies to enhance your experience on our website. You can
        control your cookie preferences through your browser settings.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        Your personal data will be retained for as long as necessary to provide
        our services or as required by law. Data will be securely disposed of
        following our{" "}
        <a href="#data-management-policy">Data Management Policy</a>.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. This Privacy
        Policy does not apply to those external sites, and we encourage you to
        review their policies.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Changes will be
        effective immediately upon posting on our platform.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy,
        please contact our Data Protection Officer:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@valid.care">support@valid.care</a>
        <br />
      </p>
    </div>
  );
};

export default PrivacyPolicy;
